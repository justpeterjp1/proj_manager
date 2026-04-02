import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";


function App() {
 const [projectState, setProjectState] = useState({
         selectedProjectId: undefined,
         projects: []
     });
     
     function handleSelectProject(id) {
        setProjectState((prevState) => {
             return {
               ...prevState,
                 selectedProjectId: id,
             }
         });
     }

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

     function handleDeleteProject() {
      setProjectState(prevState => {
        return {
          ...prevState,
          selectedProjectId: undefined,
          projects: prevState.projects.filter(p => p.id !== prevState.selectedProjectId)
        }
      })
     }

     const selectedProject = projectState.projects.find(p => p.id === projectState.selectedProjectId);
     let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;
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
      onSelectProject={handleSelectProject}
      projects={projectState.projects} 
      onStartAddProject={handleStartAddProject} />
        {content}
       
    </main>
  );
}

export default App;
