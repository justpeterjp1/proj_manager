export default function Button({ children, className = "", ...props }) {
    const createProjectClasses = 'text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-4'
    return (
        <button className={`px-6 py-2 rounded-md   bg-stone-700 text-stone-200 hover:bg-stone-600 hover:text-stone-100 ${className}`} {...props}>
            {children}
        </button>
    );
}