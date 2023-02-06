export interface InitialUser {
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    user_id: string;
  };
}
export interface RegisterStateType {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginStateType {
  email: string;
  password: string;
}

export interface UserAccountInformationType {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export interface UserPersonalInformationType {
  firstName: string;
  lastName: string;
  dob: string;
  mobile: string;
}
