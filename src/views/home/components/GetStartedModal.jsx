import React from "react";
import { Modal, Box, Grid } from "@mui/material";
import { MdCancel } from "react-icons/md";
import AppInput from "../../../components/form/AppInput";
import AppSelect from "../../../components/form/AppSelect";

const currencies = [
  {
    value: "",
    label: "Select Facility",
  },
];
const GetStartedModal = (props) => {
  const { open, handleClose } = props;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute bg-white w-[90%] lg:w-[771px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[8px] py-[48px] px-[24px] lg:p-[48px]">
        <MdCancel
          className="text-gray-500 absolute -right-2 -top-2 text-[20px]"
          onClick={handleClose}
        />
        <h3 className="text-primary-gradient text-[20px] lg:text-[24px] font-bold mb-8">
          Have a feel of what radease is
        </h3>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AppInput label="First name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppInput label="Last name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppInput label="Work Email" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppInput label="Business Phone number" />
            </Grid>
          </Grid>
          <Box className="my-5">
            <AppInput label="Company name" />
          </Box>
          <Box className="my-5">
            <AppSelect
              name="facility"
              label="Health Facility"
              options={currencies}
            />
          </Box>
          <button className="rounded py-3.5 px-8 bg-[#12516A] text-white min-w-[120px] text-sm font-bold">
            Submit
          </button>
        </form>
      </Box>
    </Modal>
  );
};

export default GetStartedModal;
