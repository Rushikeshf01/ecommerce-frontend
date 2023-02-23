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

export interface HeaderSubCategoryType {
  productCategoryId: number;
  productSubcategoryDescription: string | null;
  productSubcategoryId: number;
  productSubcategoryName: string;
}

export interface HomeCategoriesType {
  categoryDescription: string;
  categoryId: number;
  categoryName: string;
}

export interface TopProductType {
  productDescription: string;
  productName: string;
  productPrice: number;
  productDiscount?: number;
  productAvgRating: number;
  productRatingCount: number;
  productId: number;
}

export interface UserAccountInformationType {
  email: string;
  newPassword: string;
}

export interface UserPersonalInformationType {
  firstName: string;
  lastName: string;
  dob: string;
  mobile: string;
  profilePicName: string;
}

export interface UserPersonalInformationBase64Type {
  firstName: string;
  lastName: string;
  dob: string;
  mobile: string;
  profilePicName?: string;
  profilePicBase64: string;
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
  updatedAt: string;
}

export interface UserOrdersType {}

export interface UserFavoritesType {
  productCategoryId: number;
  productDescription: string;
  productId: number;
  productInventoryId: number;
  productName: string;
  productPrice: number;
  productSubcategoryId: number;
  userFavoriteId: number;
}

export interface SingleProductType {
  categoryDescription: string;
  categoryId: number;
  categoryName: string;
  discountId: number;
  discountName: string;
  discountPercent: number;
  inventoryId: number;
  inventoryQuantity: number;
  productAvgRating: number;
  productDescription: string;
  productId: number;
  productName: string;
  productPrice: number;
  productRatingCount: number;
  subcategoryDescription: string;
  subcategoryId: number;
  subcategoryName: string;
  isFavorite: boolean;
}
