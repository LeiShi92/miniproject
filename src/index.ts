import {generateRandomNumber } from "./util";

interface Todo {
    text: string;
    completed: boolean;
}
const todos: Todo[] = [];
// const input = document.getElementById("todoinput")! as HTMLInputElement;
// const list = document.getElementById("todolist")! as HTMLUListElement;

const input = document.querySelector<HTMLInputElement>("#todoinput")!;
const list = document.querySelector<HTMLUListElement>("#todolist")!;

function savedTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodoElement(todo: Todo) {
    const li = document.createElement("li");
    li.textContent = todo.text + ` (ID: ${generateRandomNumber()})`;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        savedTodos();
    });
    li.append(checkbox);
    list.appendChild(li);
    input.value = "";
}

function handleSumit(e: SubmitEvent) {
    e.preventDefault();
    const todo = { text: input.value, completed: false };
    todos.push(todo);
    createTodoElement(todo);
    savedTodos();
}

const form = document.querySelector("form")!;
form.addEventListener("submit", handleSumit);

function readTodos() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
        todos.push(...JSON.parse(savedTodos));
        todos.forEach(createTodoElement);
    }
}

readTodos();

function getRandomElement<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        throw new Error("Cannot get a random element from an empty array");
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
