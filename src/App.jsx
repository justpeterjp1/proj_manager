import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";


function App() {
 const [projectState, setProjectState] = useState({
         selectedProjectId: undefined,
         projects: []
     });
 
     const handleStartAddProject = () => {
         setProjectState((prevState) => {
             return {
               ...prevState,
                 selectedProjectId: null,
             }
         });
     };

     function handleCancelAddProject() {
        setProjectState((prevState) => {
             return {
               ...prevState,
                 selectedProjectId: undefined,
             }
         });
     }

     function handleAddProject(projectData) {
      setProjectState(prevState => {
        const newProject = {
          ...projectData,
          id: Math.random()
        }
        return {
          ...prevState,
          projects: [...prevState.projects, newProject]
        }
      })
     }
     
     let content;
     if (projectState.selectedProjectId === null) {
         content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
     } else if(projectState.selectedProjectId === undefined) {
         content = <NoProjectSelected 
                    onStartAddProject={handleStartAddProject}
      />;
     } 

  return (
    <main className="h-screen flex my-8 gap-8">
      <Sidebar
      projects={projectState.projects} 
      onStartAddProject={handleStartAddProject} />
        {content}
       
    </main>
  );
}

export default App;
