import style from "./SortBy.module.css"
const SortBy = ({sortBy}) => {

    return ( 
        <>
             <input className={style.input} onChange={sortBy} placeholder="search for group" />
        </>
     )
}
 
export default SortBy;