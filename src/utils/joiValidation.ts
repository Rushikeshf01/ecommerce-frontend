import Joi from "joi";
import {
  LoginStateType,
  RegisterStateType,
  UserAddressesType,
  UserPersonalInformationBase64Type,
  UserPersonalInformationType,
} from "../types/authTypes";

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

  private userProfileSchema: Joi.ObjectSchema = Joi.object({
    firstName: Joi.string().required().label("First name"),
    lastName: Joi.string().required().label("Last name"),
    mobile: Joi.string().min(10).required().label("Mobile number"),
    dob: Joi.string().required().label("Date of birth"),
    profilePicName: Joi.optional(),
    profilePicBase64: Joi.string().required().label("Profile picture"),
  });

  private userAddressSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string().required().label("Name"),
    mobile: Joi.string().min(10).required().label("Mobile"),
    line1: Joi.string().required().label("Address Line 1"),
    line2: Joi.string().required().label("Address Line 2"),
    area: Joi.string().required().label("Area"),
    postalCode: Joi.number().required().label("Postal Code"),
    country: Joi.string().required().label("Country"),
    state: Joi.string().required().label("State"),
    city: Joi.string().required().label("City"),
    addressId: Joi.number().label("Address Id"),
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

  public validateUserAddressData(userAddressData: UserAddressesType) {
    const { error, value } = this.userAddressSchema.validate(userAddressData);
    if (error) {
      return { true: true, error: error.details[0].message };
    }
    if (value) {
      return false;
    }
    return false;
  }

  public validateUserProfileData(
    userProfileData: UserPersonalInformationBase64Type
  ) {
    const { error, value } = this.userProfileSchema.validate(userProfileData);
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
