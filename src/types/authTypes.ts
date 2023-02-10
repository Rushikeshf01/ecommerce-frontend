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
  // profilePic: string;
}

export interface UserAddressesType {
  name: string;
  line1: string;
  line2: string;
  area: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  mobile: string;
  addressId: number;
}

export interface UserReviewsType {
  productCategoryId: number;
  productDescription: string;
  productId: number;
  productInventoryId: number;
  productName: string;
  productPrice: number;
  productRating: number;
  productRatingId: number;
  productReviewId: number;
  productReviewMsg: string;
  productSubcategoryId: number;
  userId: number;
}
