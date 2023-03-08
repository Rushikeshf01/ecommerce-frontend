import { Link } from "react-router-dom";
import { ApplicationConstant } from "../constant/applicationConstant";
import { HeaderCategoriesProps } from "../types/authProps";

const HeaderCategories = (props: {
  setIsCategoryDroped: any;
  allCategories: HeaderCategoriesProps[];
}) => {
  const handleMouseLeave = () => {
    props.setIsCategoryDroped(false);
  };

  return (
    <div className="header-category-main" onMouseLeave={handleMouseLeave}>
      {props.allCategories.map((category, index) => (
        <div key={`header-category-index: ${index}`}>
          <p className="header-category-text">
            <Link
              to={`${ApplicationConstant.PRODUCT_URL_PATH}/category/${category.categoryName.toLowerCase()}`}
            >
              {category.categoryName}
            </Link>
          </p>
          {category.subCategories.map((subcategory, index) => (
            <p className="header-subcategory-text">
              <Link to={""} key={`header-subcategory-index: ${index}`}>
                {subcategory}
              </Link>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HeaderCategories;
