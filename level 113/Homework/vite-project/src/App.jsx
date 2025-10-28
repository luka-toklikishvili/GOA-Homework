import { useState, useEffect } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    // ამოიღე localStorage-დან წინა დავალებები
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");

  // როცა tasks იცვლება → შეინახე localStorage-ში
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // დავალების დამატება
  function addTodo(e) {
    e.preventDefault();
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text, done: false };
    setTodos([newTodo, ...todos]);
    setText("");
  }

  // შესრულებულად მონიშვნა
  function toggleDone(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  // წაშლა
  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          📝 To-Do List
        </h1>

        {/* Input + Button */}
        <form onSubmit={addTodo} className="flex gap-2 mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="შეიყვანე დავალება..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            დამატება
          </button>
        </form>

        {/* დავალებების სია */}
        <ul className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center">
              ჯერ არ გაქვს დავალებები.
            </p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center border p-2 rounded-lg"
              >
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleDone(todo.id)}
                  />
                  <span
                    className={`${
                      todo.done ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                </label>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✖
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

