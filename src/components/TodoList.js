import React, { useState } from 'react'
import './TodoList.css'

export default function TodoList() {

    const [activity, setActivity] = useState("");
    const [taskList, setTaskList] = useState([]);


    function handleSubmit(e) {
        e.preventDefault();
        if (activity === "") {
            //do nothing when the input is empty...
        }
        else {
            setTaskList([...taskList, activity]);
            setActivity("");
        }
    }

    function handleRemoveClick(i) {
        setTaskList(taskList.filter((task, id) => {
            return i !== id;
        }))
        const a = taskList.filter((task, id) => {
            return i === id;
        })
        console.log(a);
    }

    function handleRemoveAll() {
        setTaskList([]);
    }

    // function handleTaskClick(i) {
    // for later functionality
    // }


    return (
        <>
            <div className="container">
                <div className="header"><h3>ToDoList 🖊️</h3></div>
                <form>
                    <input type="text" placeholder='✍️ Add task...' value={activity} onChange={(e) => {
                        setActivity(e.target.value)
                    }} />
                    <button onClick={handleSubmit}>Add</button>
                </form>
                {taskList !== [] && taskList.map((task, i) => {
                    return (
                        <>
                            <div key={i}>
                                <div className='taskData'>
                                    <h3>{task}</h3>
                                    <button className='removeButton' onClick={() => handleRemoveClick(i)} >Remove</button>

                                </div>
                            </div>
                        </>
                    )
                })}
                {taskList.length >= 1 && <button className='removeAllButton' onClick={handleRemoveAll}>Remove All</button>}

            </div>
        </>
    )
}

