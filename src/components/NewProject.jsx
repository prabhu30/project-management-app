import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onSaveProjectDetails }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSaveDetails() {
    const inputTitle = titleRef.current.value;
    const inputDescription = descriptionRef.current.value;
    const inputDueDate = dueDateRef.current.value;

    onSaveProjectDetails({
      id: Math.random(),
      title: inputTitle,
      description: inputDescription,
      dueDate: inputDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16 mx-auto">
      <menu className="flex justify-end items-center gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}
