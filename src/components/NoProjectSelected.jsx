import noProjectImage from '../assets/no-projects.png'
import Button from './Button'
export default function NoProjectSelected() {
    return <div className="w-2/3 mt-24 text-center bg-white rounded-lg shadow-md p-4">
        <img src={noProjectImage} alt="An empty task list" className='w-16 h-16 object-contain mx-auto' />
        <h2 className=" text-xl font-bold my-4 text-stone-500">No project selected</h2>
        <p className="text-stone-400 mb-4">Please select a project or get started with a new one</p>
        <Button className='text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-4'>Create New Project</Button>
    </div>
}