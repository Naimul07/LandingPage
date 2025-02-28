'use client'
import { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    function addTask(e) {
        e.preventDefault();
        if (!input.trim()) return; // Prevent empty tasks
        setTodos([...todos, { id: crypto.randomUUID(), title: input, completed: false }]);
        setInput('');
    }

    function toggleTask(id) {
        setTodos(todos.map((item) => 
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    }

    function deleteTask(id) {
        setTodos(todos.filter((item) => item.id !== id));
    }

    return (
        <div className="container mx-auto p-4 max-w-md">
            <h1 className="text-center font-bold capitalize text-2xl">Todo App</h1>
            <div className="flex flex-col items-center my-4">
                <input 
                    type="text"
                    className="border-2 rounded w-full p-2"
                    placeholder="Enter your task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button 
                    className="w-full bg-blue-500 text-white font-bold p-2 rounded mt-2 disabled:bg-gray-400"
                    onClick={addTask}
                    disabled={!input.trim()}
                >
                    Add Task
                </button>
            </div>
            <div>
                {todos.length > 0 ? (
                    todos.map((item) => (
                        <div key={item.id} className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded">
                            <div className="flex items-center">
                                <input 
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => toggleTask(item.id)}
                                    className="mr-2"
                                />
                                <p className={item.completed ? 'line-through text-gray-500' : ''}>
                                    {item.title}
                                </p>
                            </div>
                            <button 
                                className="text-red-500 font-bold"
                                onClick={() => deleteTask(item.id)}
                            >
                                ✖
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No tasks available</p>
                )}
            </div>
        </div>
    );
}

export default Todo;
