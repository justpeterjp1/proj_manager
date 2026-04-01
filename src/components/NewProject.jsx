import { useRef } from 'react';
import Input from "./Input";
import Modal from './Modal';

export default function NewProject({onAdd, onCancel}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || 
           enteredDescription.trim() === '' || 
           enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops... looks like you missed some required fields.</p>
        <p className='text-stone-600 mb-4'>Please fill all required fields</p>
    </Modal>
    <div className="w-[35rem] mt-16 bg-white rounded-lg shadow-md p-4">
        <menu className="flex gap-4 items-center justify-end my-4">
            <p>
                <button 
                onClick={onCancel}
                className=" px-6 py-2 text-stone-800 hover:text-stone-950">Cancel</button>
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
    </>
    )

}