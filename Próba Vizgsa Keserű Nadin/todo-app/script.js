document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const moveLeftButton = document.getElementById("moveLeftButton");
    const moveRightButton = document.getElementById("moveRightButton");
    const deleteButton = document.getElementById("deleteButton");
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");
    const doneList = document.getElementById("doneList");

    addButton.addEventListener("click", function() {
        const newTodo = todoInput.value;
        if (newTodo.trim() !== "") {
            const option = document.createElement("option");
            option.text = newTodo;
            todoList.appendChild(option);
            todoInput.value = "";
        }
    });

    moveLeftButton.addEventListener("click", function() {
        moveSelectedOptions(todoList, doneList);
    });

    moveRightButton.addEventListener("click", function() {
        moveSelectedOptions(doneList, todoList);
    });

    deleteButton.addEventListener("click", function() {
        removeSelectedOptions(todoList);
        removeSelectedOptions(doneList);
    });

    function moveSelectedOptions(sourceList, destinationList) {
        const selectedOptions = Array.from(sourceList.selectedOptions);
        selectedOptions.forEach(option => {
            destinationList.appendChild(option);
        });
    }

    function removeSelectedOptions(list) {
        const selectedOptions = Array.from(list.selectedOptions);
        selectedOptions.forEach(option => {
            list.removeChild(option);
        });
    }

    const addShoppingButton = document.getElementById("addShoppingButton");
    const shoppingInput = document.getElementById("shoppingInput");
    const shoppingList = document.getElementById("shoppingList");

    addShoppingButton.addEventListener("click", function() {
        const newItem = shoppingInput.value;
        if (newItem.trim() !== "") {
            const option = document.createElement("option");
            option.text = newItem;
            shoppingList.appendChild(option);
            shoppingInput.value = "";
        }
    });
});
