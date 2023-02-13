import { Star } from "@mui/icons-material";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [className, setClassName] = useState<string[]>([
    "pointer",
    "pointer",
    "pointer",
    "pointer",
    "pointer",
  ]);

  const handleMouseEnter = (index: number) => {
    setRating(index + 1);
  };

  const handleMouseLeave = (index: number) => {
    setRating(0);
  };

  const handleClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, index) => (
        <Star
          key={star}
          className={className[index]}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default StarRating;
