import Header from "../../../commonComponents/Header";
import SingleProductDetails from "./SingleProductDetails";
import "./singleProduct.css";
import SingleProductDescription from "./SingleProductDescription";

const SingleProductMain = () => {
  
  return (
    <div>
      <Header />
      <SingleProductDetails />
      <SingleProductDescription />
    </div>
  );
};

export default SingleProductMain;
