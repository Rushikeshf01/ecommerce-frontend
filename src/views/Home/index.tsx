import Header from "../../commonComponents/Header";
import ProductResult from "../Product/ProductsResult/ProductResult";
import ProductByCategory from "./ProductByCategory";
import TopProducts from "./TopProducts";

const Home = () => {
  return (
    <div>
      <Header />
      <ProductByCategory />
      <TopProducts />
      <ProductResult />
    </div>
  );
};

export default Home;
