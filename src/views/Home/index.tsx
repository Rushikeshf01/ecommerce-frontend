import Header from "../../commonComponents/Header";
import ProductByCategory from "./ProductByCategory";
import TopProducts from "./TopProducts";

const Home = () => {
  return (
    <div>
      <Header />
      <ProductByCategory />
      <TopProducts />
    </div>
  );
};

export default Home;
