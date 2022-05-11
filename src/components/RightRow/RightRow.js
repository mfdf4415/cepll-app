import SortBy from "../SortBy/SortBy";
import style from "./RightRow.module.css"
import Product from "../Product/Product"

const RightRow = ({ products, sortBy, deleteProduct }) => {

    return (
        <div className={style.rightRow}>
            <SortBy  sortBy={sortBy}/>
            <Product products={products} deleteProduct={deleteProduct} />
        </div>
    )
}

export default RightRow;