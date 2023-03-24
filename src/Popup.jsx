import * as React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#151515",
  color: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Popup({ open, setOpen, modalData }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Additional Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Created at: {modalData?.createdAt}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description: {modalData?.description || "No description"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Amount of Holders: {modalData?.holders.count}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
