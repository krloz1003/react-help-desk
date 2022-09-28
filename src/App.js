import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState"

import TaskList from "./componentes/TaskList";
import TaskForm from "./componentes/TaskForm";
import Heading from "./componentes/Heading";




function App() {
  return (
    <GlobalProvider>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <Heading />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
