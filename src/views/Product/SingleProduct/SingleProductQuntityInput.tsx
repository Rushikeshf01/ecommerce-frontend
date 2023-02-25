import { Add, Remove } from "@mui/icons-material";
import { SingleProductType } from "../../../types/authTypes";

const SingleProductQuntityInput = (props: {
  singleProductState: SingleProductType;
}) => {
  return (
    <div className="single-product-quntity-input-main">
      <div className="single-product-quntity-input-box">
        <Remove className="pointer single-product-quntity-input-icon-hover" />
        <p>{"0"}</p>
        <Add className="pointer single-product-quntity-input-icon-hover" />
      </div>
      <div className="single-product-quntity-input-box single-product-quntity-input-box-hover pointer">
        ADD TO CART
      </div>
    </div>
  );
};

export default SingleProductQuntityInput;
