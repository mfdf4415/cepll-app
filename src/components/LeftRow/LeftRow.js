import Style from "./LeftRow.module.css"
import Bunner from "./bunner.jpg"
import NewGroup from "../NewGroup/NewGroup";
import NewProduct from "../NewProduct/NewProduct";

const LeftRow = ({ addNewGroup, groups, addNewProduct }) => {
    return (
        <div className={Style.leftRow}>
            <img src={Bunner} />
            <div className={Style.leftRowContainer}>
                <NewGroup addNewGroup={addNewGroup} />
                <NewProduct groups={groups} addNewProduct={addNewProduct} />
            </div>

            <p>&copy; Mo7ammad Fathi</p>

        </div>
    )
}

export default LeftRow;