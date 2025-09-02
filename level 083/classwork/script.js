 function addTodo() {
      const input = document.getElementById("todoInput");
      const value = input.value.trim();
      if (value === "") return;

      const li = document.createElement("li");
      li.textContent = value;

      document.getElementById("todoList").appendChild(li);
      input.value = "";
    }

    function resetList() {
      document.getElementById("todoList").innerHTML = "";
    }