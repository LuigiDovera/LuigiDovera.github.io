import React from "react";
import { toast } from "react-toastify";

import {
  DialogBoxContent,
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon,
} from "../styles/styles";

export const dialogBox = (type: string, message: string) => {
  if (type === "success") {
    toast.success(
      <DialogBoxContent>
        <SuccessIcon />
        <span>{message}</span>
      </DialogBoxContent>
    );
  } else if (type === "error") {
    toast.error(
      <DialogBoxContent>
        <ErrorIcon />
        <span>{message}</span>
      </DialogBoxContent>
    );
  } else if (type === "warning") {
    toast.warning(
      <DialogBoxContent>
        <WarningIcon />
        <span>{message}</span>
      </DialogBoxContent>
    );
  } else {
    toast(
      <DialogBoxContent>
        <InfoIcon />
        <span>{message}</span>
      </DialogBoxContent>
    );
  }
};
