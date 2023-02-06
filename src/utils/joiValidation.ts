import Joi from "joi";
import { LoginStateType, RegisterStateType } from "../types/authTypes";

class JoiUtils {
  private loginDataSchema: Joi.ObjectSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: ["com", "in"] } })
      .required()
      .label("Email"),
    password: Joi.string().min(5).max(20).required().label("Password"),
  });

  private registerDataSchema: Joi.ObjectSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: ["com", "in"] } })
      .required()
      .label("Email"),
    password: Joi.string().min(5).max(20).required().label("Password"),
    confirmPassword: Joi.string()
      .min(5)
      .max(20)
      .required()
      .label("Confirm Password"),
  });

  public validateLoginData(loginData: LoginStateType) {
    const { error, value } = this.loginDataSchema.validate(loginData);
    if (error) {
      return { true: true, error: error.details[0].message };
    }
    if (value) {
      return false;
    }
    return false;
  }

  public validateRegisterData(registerData: RegisterStateType) {
    const { error, value } = this.registerDataSchema.validate(registerData);
    if (error) {
      return { true: true, error: error.details[0].message };
    }
    if (value) {
      return false;
    }
    return false;
  }
}

export const joiUtilObject = new JoiUtils();
