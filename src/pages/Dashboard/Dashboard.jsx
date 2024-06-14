import ProjectForm from "../../components/ProjectForm/ProjectForm";
import logo from "/logo.png";
import comingSoon from "/coming-soon.jpg";
import GanttChart from "../../components/GanttChart/GanttChart";
import { tasks } from "../../utils/constant";
import { useState } from "react";

const Dashboard = () => {
  const [allTasks, setAllTasks] = useState(tasks);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async (formData) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://connaq-llm-rwns2svoua-uc.a.run.app/api/process/?project_size=${formData.size}&project_duration=${formData.projectDuration}&start_date=${formData.startDate}`
      );
      const data = await res.json();
      setAllTasks(data.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full gap-4 h-full">
      <div className="w-1/5">
        <div className="h-full flex flex-col justify-between">
          <ProjectForm submitForm={submitHandler} />
          <a href="https://connaqtech.com/" target="_blank" className="block">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>

      <div className="w-[80vw] h-[89vh] rounded-s-xl overflow-auto text-black scrollbar">
        {isLoading && (
          <div className="h-full bg-white content-center">
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 rounded-full animate-spin border-b-2 border-gray-900"></div>
            </div>
            <p className="text-center">Loading...</p>
          </div>
        )}
        {error && (
          <div className="h-full bg-white content-center">
            <p className="text-center">Something went wrong</p>
            <p className="text-center">Please try again</p>
          </div>
        )}
        <div className="w-full  bg-white">
          {!isLoading && !error && <GanttChart allTasks={allTasks} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
