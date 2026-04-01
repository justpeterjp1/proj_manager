import { useRef } from 'react';
import Input from "./Input";
export default function NewProject({onAdd}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || 
           enteredDescription.trim() === '' || 
           enteredDueDate.trim() === '') {
            // Validation
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return <div className="w-[35rem] mt-16 bg-white rounded-lg shadow-md p-4">
        <menu className="flex gap-4 items-center justify-end my-4">
            <p>
                <button className=" px-6 py-2 text-stone-800 hover:text-stone-950">Cancel</button>
            </p>
            <p>
                <button
                onClick={handleSave} 
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </p>
        </menu>
        <div>
            
            <Input ref={title} label="Project Name" type="text" placeholder="Enter project name" />
            <Input ref={description}  label="Description" textarea  />
            <Input ref={dueDate} label="Due Date" type="date" />
        </div>
    </div>
}