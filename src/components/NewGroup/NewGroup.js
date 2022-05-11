import style from './NewGroup.module.css'
// import bunner from './bunner.jpg'
import { useRef } from 'react'

const NewGroup = ({ addNewGroup }) => {
    const groupName = useRef()

    return (
            <div className={style.add}>
                <label>create new group</label>
                <input ref={groupName} placeholder="new group" type="text" />
                <button type="submit" onClick={() => addNewGroup(groupName.current)}>Add Group</button>
            </div>
    )
}

export default NewGroup