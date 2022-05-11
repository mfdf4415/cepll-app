import { useState } from 'react';
import Style from './App.module.css'
import LeftRow from './components/LeftRow/LeftRow';
import RightRow from './components/RightRow/RightRow';

const App = () => {
    const groupItems = []
    const productItems = []

    const groupStorageHandler = () => {
        if (localStorage.getItem("groups") === null) {
            return
        } else {
            return JSON.parse(localStorage.getItem("groups"))
        }
    }

    const productStorageHandler = () => {
        if (localStorage.getItem("products") === null) {
            return
        } else {
            return JSON.parse(localStorage.getItem("products"))
        }
    }

    const [groups, setGroups] = useState(groupStorageHandler())
    const [products, setProducts] = useState(productStorageHandler())

    const getDate = () => {
        const year = new Date().getFullYear()
        const month = new Date().getMonth()
        const day = new Date().getDate()


        return `${year}/${month}/${day}`
    }

    const addGroupHAndler = (groupName) => {
        const name = groupName.value
        if (localStorage.getItem("groups") === null) {
            groupItems.push(name)
            localStorage.setItem("groups", JSON.stringify(groupItems))
            setGroups(JSON.parse(localStorage.getItem("groups")))
        } else {
            const groupsInStorage = JSON.parse(localStorage.getItem("groups"))
            groupsInStorage.push(name)
            localStorage.setItem("groups", JSON.stringify(groupsInStorage))
            setGroups(JSON.parse(localStorage.getItem("groups")))
        }
    }


    const addProductHandler = (e, groupFeild, nameFeild) => {
        e.preventDefault()
        const productGroup = groupFeild.value
        const productName = nameFeild.value

        if (localStorage.getItem("products") === null) {
            productItems.push({
                name: productName,
                group: productGroup,
                date: getDate(),
                id: new Date().getTime()
            })

            localStorage.setItem("products", JSON.stringify(groupItems))
            setProducts(JSON.parse(localStorage.getItem("products")))
        } else {
            const groupsInStorage = JSON.parse(localStorage.getItem("products"))
            groupsInStorage.push({
                name: productName,
                group: productGroup,
                date: getDate(),
                id: new Date().getTime()
            })

            localStorage.setItem("products", JSON.stringify(groupsInStorage))
            setProducts(JSON.parse(localStorage.getItem("products")))
        }
    }

    const sortHandler = (e) => {
        const sortValue = e.target.value
        const allProduct = [...products]
        console.table(allProduct)
        const filterdProducts = allProduct.filter(product => product.group === sortValue)
        localStorage.setItem("products", JSON.stringify(filterdProducts))
        setProducts(JSON.parse(localStorage.getItem("products")))

    }

    const deleteProductHandler = (id) => {
        const allProduct = JSON.parse(localStorage.getItem("products"))
        const filterdProducts = allProduct.filter(product => product.id !== id)
        localStorage.setItem("products", JSON.stringify(filterdProducts))
        setProducts(JSON.parse(localStorage.getItem("products")))
    }

    return (
        <div className={Style.container}>

            <LeftRow addNewGroup={addGroupHAndler} groups={groups} addNewProduct={addProductHandler} />
            <RightRow products={products} deleteProduct={deleteProductHandler} sortBy={sortHandler} />

        </div>
    )
}

export default App