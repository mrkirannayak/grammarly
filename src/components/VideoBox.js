import { Box } from "@mui/material";
import React from "react";
import VideoImg from "../assets/images/video.png";
import ReactPlayer from "react-player";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const VideoBox = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box className="videoBox" onClick={handleClickOpen}>
        <img src={VideoImg} alt="Get the Job Done" title="Get the Job Done" />
      </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="videoBootstrapDialog"
      >
        <BootstrapDialogTitle
          className="handleClose"
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>

        <DialogContent dividers>
          <ReactPlayer
            controls
            width="1018px"
            height="577px"
            url="https://static.grammarly.com/assets/videos/professional_outcomes.mp4"
          />
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};

export default VideoBox;
