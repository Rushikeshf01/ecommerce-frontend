export interface HeaderCategoriesProps {
  categoryName: string;
  subCategories: string[];
}

export interface ProductVerticleCardProps {
  productAvgRating: number;
  productDescription: string;
  productId: number;
  productName: string;
  productPrice: number;
  productRatingCount: number;
  subcategoryDescription: string;
  subcategoryId: number;
  subcategoryName: string;
  discountId: number;
  discountName: string;
  discountPercent: number;
  cartId?: number;
  quantity?: number;
  productCategoryId?: number;
  productInventoryId?: number;
  productSubcategoryId?: number;
  userFavoriteId?: number;
}