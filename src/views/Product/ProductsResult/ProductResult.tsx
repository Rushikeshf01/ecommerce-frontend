import Header from "../../../commonComponents/Header"
import FilterCard from "./FilterCard"
import ProductList from "./ProductList"
import "./productResult.css"
const ProductResult = () => {
    return(
        <div>
            <Header/>
            <div className="prod-result">
                <FilterCard />
                <ProductList />
            </div>
        </div>
        
    )
}

export default ProductResult