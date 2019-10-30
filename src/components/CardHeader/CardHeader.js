import React from 'react';
import './CardHeader.css'

const CardHeader = (props) => {
    //console.log(props);
    return (
        <div className="card-header">
            <h1>ToDo List</h1>
            {/* {activeList ? (activeList.listName ? <h1>Todo List: {activeList.listName}</h1> :
                <h1>Todo List: <input type="text" id="listName" placeholder="Enter list name: " /><button onClick={updateListName}>Spara</button></h1>) :
                <h1>Todo Lists</h1>}
            {activeList ? null : <button onClick={createNewList}>Skapa ny lista</button>} */}
        </div>
    )
}

export default CardHeader;