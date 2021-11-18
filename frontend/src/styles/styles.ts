import styled from "styled-components";
import colors from "./colors";
import {
  BsCheckAll,
  BsExclamationOctagon,
  BsExclamationTriangle,
} from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ToastContainer } from "react-toastify";

export const CustomToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background: ${colors.teal};
    border-radius: 8px;
  }
  .Toastify__toast--error {
    background: ${colors.redError};
    border-radius: 8px;
  }
  .Toastify__toast--warning {
    background: ${colors.yellow};
    border-radius: 8px;
  }
  .Toastify__toast--success {
    background: ${colors.green};
    border-radius: 8px;
  }
`;

const genericIcon = `
    color: #fff;
    font-size: 30px;
    margin-right: 8px;
`;

export const InfoIcon = styled(AiOutlineExclamationCircle)`
  ${genericIcon}
`;

export const SuccessIcon = styled(BsCheckAll)`
  ${genericIcon}
`;

export const WarningIcon = styled(BsExclamationTriangle)`
  ${genericIcon}
`;

export const ErrorIcon = styled(BsExclamationOctagon)`
  ${genericIcon}
`;

export const DialogBoxContent = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    color: #fff;
  }
`;
