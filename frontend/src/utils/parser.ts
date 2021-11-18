import { dialogBox } from "../styles/dialogBox";

export const notify = (type: string, message: string) =>
  dialogBox(type, message);

export const capitalize = (value: any) => {
  if (Array.isArray(value)) value = value[0];
  value = value.toString().toLowerCase();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const showErrorMessage = (error: any) => {
  !error.response
    ? notify("error", "Erro no servidor")
    : Object.keys(error.response.data).map((value) => {
        notify("error", capitalize(error.response.data[value]));
      });
};
