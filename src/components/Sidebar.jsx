import { useState } from "react";
import Button from "./Button"
export default function Sidebar({ onClick }) {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setButtonClicked(!buttonClicked);
    };

    return <aside id="sidebar" className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl uppercase">
        <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h1>
        <p>
            <Button 
            onClick={onClick}
            className="text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-4" onClick={onClick}>+ Add Project</Button>
        </p>
        <ul>
            <li><Button className="mt-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 flex justify-between my-4">Project 1</Button></li>
        </ul>
    </aside>
}
