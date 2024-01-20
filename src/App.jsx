import "./App.css";
import AddTask from "./components/addtask/AddTask";

function App() {
  return (
    <>
      <div className="grid grid-col-12 text-center bg-slate-300 px-20">
        <div className="shadow py-10 col-span-12">
          <h1 className="text-5xl font-extrabold">
            React Redux || Welcome to My Blog
          </h1>
        </div>
        <AddTask />
      </div>
    </>
  );
}

export default App;
