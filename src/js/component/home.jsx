import React, {useState} from "react";
import Toggle from "./Toggle";

//create your first component
//Parent Component
function Home(){
	const [task, setTask] = useState("");
	const [variable, setVariable] = useState([
		"Do Homework",
		"Do Laundry",
		"Walk the Dog"
	]);
	// console.log(variable)

	let todo = variable.map((item, i) => {
		return (
			<li className="list-group-item item" key={i}>
				{item}
				<div
					className="mouseOver"
					style={{ float: "right" }}
					onClick={() => removeItem(i)}>
					X
				</div>
			</li>
		);
	});

	//Add Function
	const newTodo = onKeyDownEvent => {
		// console.log(onKeyDownEvent);
		if (onKeyDownEvent.key === "Enter") {
			const newTodo = [...variable, task];
			setVariable(newTodo);
			setTask("");
		}
	};

	//Delete Function
	const removeItem = index => {
		// console.log(index);
		const newArray = variable.filter((item, i) => i !== index);
		setVariable(newArray);
	};

	
	//Edit Function



	return (
		<div className="container">
			<h1 className="">TODO's</h1>
				<input 
					className="" 
					placeholder="Todo's"
					value={task}
					onChange={e => setTask(e.target.value)}
					type="text"
					id="fname"
					name="fname"
					onKeyDown={newTodo}
				/>
			<div>
				<ul>{todo}</ul>
				<div className="list-group-item footer">
					{todo.length} item left
				</div>
			</div>
			<p><Toggle /></p>
		</div>
	);
};

export default Home;


// const styles = {
// 	container: {
// 		display: 'flex',
// 		flexDirection: 'row',
// 		background: 'black'
// 	},
// 	h1: {
// 		fontSize: '10px'
// 	}
// };

