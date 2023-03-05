import { Star } from "@mui/icons-material";
import { useState } from "react";

const StarRatingInput = (props: {
  productRating: number;
  productRatingCount?: number;
  isEditable: boolean;
}) => {
  const [rating, setRating] = useState(props.productRating);

  return (
    <div>
      <div className="flex">
        {[...Array(5)].map((star, i) => (
          <Star
            key={i}
            sx={{
              color: i < rating ? "#ffc107" : "#e4e5e9",
            }}
            className={props.isEditable ? "pointer" : ""}
            onClick={() => {
              props.isEditable ? setRating(i + 1) : undefined;
            }}
          />
        ))}
      </div>
      <p>
        {rating.toPrecision(2)} of 5 stars from {props.productRatingCount && (props.productRatingCount)}
      </p>
    </div>
  );
};

export default StarRatingInput;
