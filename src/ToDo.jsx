import { useState } from "react";
function Todo() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const addNewItem = (e) => {
        setNewItem(e.target.value);
    };
    const onAddHandler = (e) => {
        e.preventDefault();
        if (!newItem) return;
        let newItemId = Math.random();
        let newAddedItem = {
            id: newItemId,
            text: newItem,
        };
        setItems([...items, newAddedItem]);
        setNewItem("");
    };
    const deleteItem = (id) => {
        let filteredList = items.filter((item) => item.id !== id);
        setItems(filteredList);
    };
    return (
        <div className=" mx-auto w-1/2 py-10 bg-slate-400 rounded-md">
            <h1 className="text-center text-3xl font-bold mb-4">Todo List</h1>
            <form className="flex justify-center w-full">
                <input
                    className="text-slate-600 rounded-md px-2 border-2 focus:outline-none focus:border-slate-500"
                    type="text"
                    value={newItem}
                    onChange={addNewItem}
                    autoFocus
                />
                <button
                    className="bg-slate-600 ml-1 rounded-md px-3 py-1 hover:bg-slate-700"
                    onClick={onAddHandler}
                >
                    add
                </button>
            </form>
            <ul className="w-1/2 mx-auto mt-5">
                {items.map((item) => {
                    return (
                        <div className="flex justify-between mt-2">
                            <li className="break-all" key={item.id}>
                                {item.text}
                            </li>
                            <button
                                className="bg-red-600 h-6 my-auto ml-1 rounded-md px-2 py-0"
                                onClick={() => deleteItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}
export default Todo;
