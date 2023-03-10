import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addcart } from "../../../../store/slices/cartSlice";
import { ApiConstant } from "../../../constant/applicationConstant";
import appClient from "../../../network/AppClient";
import { SingleProductType } from "../../../types/authTypes";
import {
  ToastDangerMessage,
  ToastSuccessMessage,
} from "../../../utils/toastMessages";

const SingleProductQuntityInput = (props: {
  singleProductState: SingleProductType;
}) => {
  const [quantityInput, setQuantityInput] = useState(0);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    // appClient
    //   .post(`${ApiConstant.ORDER_API_PATH}/cart`, {
    //     productId: props.singleProductState.productId,
    //     quantity: quantityInput,
    //   })
    //   .then((res) => {
    //     dispatch(addcart(res.data.cart));
    //   });
    setQuantityInput(quantityInput + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantityInput(quantityInput - 1);
  };

  const handleAddToCart = () => {
    if (quantityInput >= 1) {
      appClient
        .post(`${ApiConstant.ORDER_API_PATH}/cart`, {
          productId: props.singleProductState.productId,
          quantity: quantityInput,
        })
        .then((res) => {
          dispatch(addcart(res.data.cart));
          ToastSuccessMessage("Successfull added in cart");
        });
    } else {
      ToastDangerMessage("Please fill quantity");
    }
  };

  return (
    <div className="single-product-quntity-input-main">
      <div className="single-product-quntity-input-box">
        <Remove
          onClick={handleDecreaseQuantity}
          className="pointer single-product-quntity-input-icon-hover"
        />
        <p>{quantityInput}</p>
        <Add
          onClick={handleIncreaseQuantity}
          className="pointer single-product-quntity-input-icon-hover"
        />
      </div>
      <div
        onClick={handleAddToCart}
        className="single-product-quntity-input-box single-product-quntity-input-box-hover pointer"
      >
        ADD TO CART
      </div>
    </div>
  );
};

export default SingleProductQuntityInput;
