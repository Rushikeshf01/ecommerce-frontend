import { Star } from "@mui/icons-material";
import { useState } from "react";

const StarRatingInput = (props: {
  productRating: number;
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
      <p>{rating} of 5 stars</p>
    </div>
  );
};

export default StarRatingInput;
