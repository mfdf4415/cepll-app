import { FaTrashAlt } from "react-icons/fa";
import style from './Product.module.css'

const Product = ({ products, deleteProduct }) => {
    return (
        <>
            <h2>Products</h2>
            <ul>
                {
                    products.map(product => {
                        return (
                            <li key={product.id}>
                                <p className={style.name}>{product.name}</p>
                                <p className={style.group}>{product.group}</p>
                                <p className={style.date}>{product.date}</p>
                                <FaTrashAlt onClick={() =>  deleteProduct(product.id)} />
                            </li>
                        )
                    })
                }

            </ul>
        </>

    )
}
export default Product