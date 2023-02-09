import { TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { Label } from "@mui/icons-material";

const CustomTextField = styled(TextField)({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  marginBottom: "5px",
  padding: 3,
  borderRadius: 4,
});

const CustomizedTextField = (props: {
  label: string;
  value: string | number | boolean;
  name: string;
  onChange: any;
  required?: boolean;
  fullWidth?: boolean;
}) => {
  return (
    <div className="flex flex-direction-column">
      <label htmlFor={props.name} className="pointer">
        {props.label} <span className="red-font">{props.required && "*"}</span>
      </label>
      <CustomTextField
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.name}
        required={props.required}
        fullWidth={props.fullWidth}
      />
    </div>
  );
};
export default CustomizedTextField;
