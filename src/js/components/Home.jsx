import React, { useState } from "react";

const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [hoverIndex, setHoverIndex] = useState(null);

	const handleKeyDown = (e) => {
    	if (e.key === "Enter" && inputValue.trim() !== "") {
			setTasks([...tasks, inputValue.trim()]);
			setInputValue("");
    	}
	};

	const handleDelete = (index) => {
    	setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
    	<div className="todo-container text-center mt-5">
			<h1>To-Do List</h1>
			<input
        	type="text"
        	className="form-control my-3"
        	placeholder="Añadir tarea..."
        	value={inputValue}
        	onChange={(e) => setInputValue(e.target.value)}
        	onKeyDown={handleKeyDown}
			/>

			{tasks.length === 0 ? (
        	<p>No hay tareas, añadir tareas</p>
			) : (
        	<ul className="list-group">
			{tasks.map((task, i) => (
            <li
    		key={i}
    		className="list-group-item d-flex justify-content-between align-items-center"
    		onMouseEnter={() => setHoverIndex(i)}
    		onMouseLeave={() => setHoverIndex(null)}
            >
            {task}
            {hoverIndex === i && (
            <span
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(i)}
            >
            ✖
            </span>
            )}
            </li>
        	))}
        </ul>
      	)}
    	</div>
	);
};

export default Home;