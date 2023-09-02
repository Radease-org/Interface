import React, { useEffect, useMemo, useState } from "react";
import {
  Modal,
  Box,
  Grid,
  Zoom,
  useScrollTrigger,
  InputAdornment
} from "@mui/material";
import { MdCancel } from "react-icons/md";
import AppInput from "../../../components/form/AppInput";
import AppSelect from "../../../components/form/AppSelect";
import ButtonLoader from "../../../components/loaders/ButtonLoader";
import { toast } from "react-toastify";
import { FACILITY_TYPE, NIGERIAN_STATES } from "../../../db";

const GetStartedModal = props => {
  const { open, handleClose, email } = props;

  //   state
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  // memo
  const canSubmit = useMemo(() => {
    return (
      data?.first_name &&
      data?.last_name &&
      data?.email &&
      data?.phone &&
      data?.company_name &&
      data?.health_facility
    );
  }, [data]);

  //   functions
  const closeModal = () => {
    handleClose();
    setData({});
  };
  const handleSubmit = async e => {
    e.preventDefault();
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
        <Box className="bg-white w-[90%] lg:w-[771px] rounded-[8px] py-[48px] px-[24px] lg:p-[48px] relative">
          <button onClick={handleClose} className="absolute -right-2 -top-2">
            <MdCancel className="text-gray-500 text-[20px]" />
          </button>
          <h3 className="text-[#0F172A] text-[20px] lg:text-[24px] font-bold mb-8">
            Have a feel of what Radease is
          </h3>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <AppInput
                  label="First name"
                  onChange={handleTextChange}
                  name="first_name"
                  value={data?.first_name}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppInput
                  label="Last name"
                  onChange={handleTextChange}
                  name="last_name"
                  value={data?.last_name}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppInput
                  label="Work Email"
                  onChange={handleTextChange}
                  name="email"
                  value={data?.email}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AppInput
                  label="Business Phone number"
                  onChange={handleTextChange}
                  name="phone"
                  value={data?.phone || ""}
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
                />
              </Grid>
            </Grid>
            <button
              className="rounded py-1 px-8 bg-[#12516A] text-white min-w-[130px] text-sm font-bold disabled:bg-[#f1f5f9] disabled:text-[#C7C6CA] mt-5"
              disabled={loading || !canSubmit}
            >
              {loading ? (
                <ButtonLoader />
              ) : (
                <span className="block py-2">Submit</span>
              )}
            </button>
          </form>
        </Box>
      </Zoom>
    </Modal>
  );
};

export default GetStartedModal;
