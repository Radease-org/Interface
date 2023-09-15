import React, { useEffect, useMemo, useState } from "react";
import { Modal, Box, Grid, Zoom, InputAdornment } from "@mui/material";
import { MdClose } from "react-icons/md";
import AppInput from "../../../components/form/AppInput";
import AppSelect from "../../../components/form/AppSelect";
import ButtonLoader from "../../../components/loaders/ButtonLoader";
import { toast } from "react-toastify";
import { FACILITY_TYPE, NIGERIAN_STATES } from "../../../db";
import { validateField } from "../../../utils";

const fieldsValidations = {
  first_name: { name: "First Name", min: 2, required: true },
  last_name: { name: "Last Name", min: 2, required: true },
  email: {
    name: "Work Email",
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,7}$/i,
    required: true
  },
  phone: { name: "Phone", pattern: /^$|^[0-9+]+$/, min: 10, required: true },
  company_name: { name: "Company Name", required: true },
  health_facility: {
    name: "Health Facility",
    options: FACILITY_TYPE.map(type => type.value),
    required: true
  }
};

const GetStartedModal = props => {
  const { open, handleClose, email } = props;

  //   state
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [touched, setTouched] = useState({});
  const [hasSubmittedOnce, setHasSubittedOnce] = useState(false);

  // memo
  const errors = useMemo(() => {
    const errors = {};
    if (!fieldsValidations) return;
    Object.keys(fieldsValidations).map(key => {
      const error = validateField(
        data[key]?.toString(),
        fieldsValidations?.[key]
      );
      errors[key] = error;
    });
    return errors;
  }, [data, fieldsValidations]);

  //   functions
  const closeModal = () => {
    handleClose();
    setData({});
  };
  const showError = name => {
    return (touched[name] || hasSubmittedOnce) && errors[name]?.message;
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setHasSubittedOnce(true);
    if (Object.values(errors).find(error => error?.message)) return;
    setLoading(true);
    let res = await fetch("https://api.radease.com/website/interest/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    res = await res.json();
    setLoading(false);
    if (res.status === "success") {
      toast.success("Request successful. We will reach out soon.");
      closeModal();
    } else {
      toast.error("Couldn't send your request across. Try again.");
    }
  };
  const handleTextChange = e => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setData({ ...data, [name]: value });
  };

  //   effect
  useEffect(() => {
    if (!email) return;
    setData({ email });
  }, [email]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center items-center"
    >
      <Zoom in={open}>
        <Box className="bg-white w-[90%] lg:w-[771px] rounded-[8px] p-6 lg:p-12 relative">
          <button
            onClick={handleClose}
            className="absolute -right-4 -top-4 w-8 h-8 bg-white flex justify-center items-center rounded-full"
          >
            <MdClose className="text-gray-500 text-2xl text-[#64748B]" />
          </button>
          <h3 className="text-[#0F172A] text-[20px] lg:text-[24px] font-bold mb-8">
            Have a feel of what Radease is
          </h3>
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={3}
              className="max-h-[60vh] md:max-h-[unset] overflow-auto"
            >
              <Grid item xs={12} md={6}>
                <AppInput
                  label="First name"
                  onChange={handleTextChange}
                  name="first_name"
                  value={data?.first_name}
                  error={showError("first_name")}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppInput
                  label="Last name"
                  onChange={handleTextChange}
                  name="last_name"
                  value={data?.last_name}
                  error={showError("last_name")}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppInput
                  label="Work Email"
                  onChange={handleTextChange}
                  name="email"
                  value={data?.email}
                  error={showError("email")}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppInput
                  label="Business Phone number"
                  onChange={handleTextChange}
                  name="phone"
                  value={data?.phone || ""}
                  error={showError("phone")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        className="text-[#475569]"
                      >
                        +234
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <AppInput
                  label="Company name"
                  onChange={handleTextChange}
                  name="company_name"
                  value={data?.company_name}
                  error={showError("company_name")}
                />
              </Grid>
              <Grid item xs={12}>
                <AppSelect
                  name="location"
                  label="Location"
                  options={NIGERIAN_STATES}
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item xs={12}>
                <AppSelect
                  name="health_facility"
                  label="Health Facility"
                  options={FACILITY_TYPE}
                  onChange={handleTextChange}
                  error={showError("health_facility")}
                />
              </Grid>
            </Grid>
            <div className="flex justify-between mt-5">
              <button
                className="rounded py-1 px-8 bg-[#061541] text-white min-w-[130px] text-sm font-bold disabled:bg-[#f1f5f9] disabled:text-[#C7C6CA]"
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <ButtonLoader />
                ) : (
                  <span className="block py-2">Submit</span>
                )}
              </button>
              <button
                className="block md:hidden py-1 px-8 bg-[#F7F9FF] text-sm text-[#2F4993] font-bold"
                onClick={handleClose}
                type="button"
              >
                Close
              </button>
            </div>
          </form>
        </Box>
      </Zoom>
    </Modal>
  );
};

export default GetStartedModal;
