import { useRef } from 'react'
import Style from './NewProduct.module.css'

const NewProduct = ({ groups, addNewProduct }) => {
    const groupFeild = useRef()
    const nameFeild = useRef()

    return (
        <form onSubmit={(e) => addNewProduct(e, groupFeild.current, nameFeild.current)}>
            <label>create new product</label>
            <select ref={groupFeild}>
                {groups.map(group => {
                    return (
                        <option key={Math.floor(Math.random() * 50000)}
                            value={group}>{group}</option>
                    )
                })}
            </select>
            <input ref={nameFeild} required placeholder="product" />
            <button>Add Product</button>
        </form>
    )
}

export default NewProduct