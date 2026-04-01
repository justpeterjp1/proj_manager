import Button from "./Button";
import Input from "./Input";
export default function NewProject() {
    return <div className="w-[35rem] mt-16 bg-white rounded-lg shadow-md p-4">
        <menu className="flex gap-4 items-center justify-end my-4">
            <p>
                <button className=" px-6 py-2 text-stone-800 hover:text-stone-950">Cancel</button>
            </p>
            <p>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </p>
        </menu>
        <div>
            
            <Input id="project-name" label="Project Name" type="text" placeholder="Enter project name" />
            <Input id="project-description" label="Description" textarea  />
            <Input id='date' label="Due Date" type="date" />
        </div>
    </div>
}