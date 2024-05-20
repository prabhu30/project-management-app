import { useRef, useState } from "react";
import Modal from "./Modal";

export default function TaskInput({ onAddTask }) {
  const [taskInput, setTaskInput] = useState("");

  const modalRef = useRef();

  function handleChangeTaskInput(event) {
    setTaskInput(event.target.value);
  }

  function handleAddNewTask() {
    if (taskInput.trim() === "") {
      modalRef.current.open();
      return;
    }

    onAddTask(taskInput);
    setTaskInput("");
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-3">
          Oops! Looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-3">
          Please make sure you provide a valid value for the input field.
        </p>
      </Modal>
      <div className="flex items-center gap-8">
        <input
          type="text"
          placeholder="Enter task name..."
          className="w-64 p-1 px-2 border-b-2 rounded-sm border-stone-300 bg-stone-50 text-stone-600 focus:outline-none focus:border-stone-600"
          value={taskInput}
          onChange={handleChangeTaskInput}
        />
        <button
          className="text-white bg-stone-900 rounded-md px-4 py-2"
          onClick={handleAddNewTask}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
