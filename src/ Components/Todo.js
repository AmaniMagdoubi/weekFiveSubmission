import { useState  } from "react";

const Todo = ( { task, deleteHandler, index }) => {
    const [complete, setComplete] = useState(false); 

    return (
        <div>
            {/* conditional rendering - ternary operator */}
            {complete ? (
                <h1 style={{color: "#91C499", textDecoration: "line-through", fontStyle: "italic" }}>
                    {task}
                </h1>
            ) : (
                <h1>{ task }</h1>
            )}
            <button onClick={() => deleteHandler(index)} className='Btn-Delete'>Delete</button>
            <button onClick={() => setComplete(true)} className='Btn-Complete'>Complete</button>
        </div>
    );
};

export default Todo; 