import { useState } from "react";
import Button from "./Button"
export default function Sidebar({ onStartAddProject, projects }) {
    

    return <aside id="sidebar" className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl uppercase">
        <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h1>
        <p>
            <Button 
            onClick={onStartAddProject}
            className="text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-4" >+ Add Project</Button>
        </p>
        <ul className="mt-8">
            {projects.map(project => <li key={project.id}>
                <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
            </li>)}
        </ul>
    </aside>
}
