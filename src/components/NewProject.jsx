import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSaveProjectDetails, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modalRef = useRef();

  function handleSaveDetails() {
    const inputTitle = titleRef.current.value;
    const inputDescription = descriptionRef.current.value;
    const inputDueDate = dueDateRef.current.value;

    if (
      inputTitle.trim() === "" ||
      inputDescription.trim() === "" ||
      inputDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onSaveProjectDetails({
      title: inputTitle,
      description: inputDescription,
      dueDate: inputDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-3">
          Oops! Looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-3">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>

      <div className="w-[35rem] mt-16 mx-auto">
        <menu className="flex justify-end items-center gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950"
              onClick={handleSaveDetails}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" type="text" ref={titleRef} />
          <Input label="Description" textarea ref={descriptionRef} />
          <Input label="Due Date" type="date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
}
