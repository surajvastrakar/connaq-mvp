import ProjectForm from "../../components/ProjectForm/ProjectForm";
import logo from "/logo.png";
import comingSoon from "/coming-soon.jpg";
import GanttChart from "../../components/GanttChart/GanttChart";
import { useEffect, useRef, useState } from "react";

const Dashboard = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async (formData) => {
    try {
      setIsLoading(true);
      setError(false);

      // old api
      // const res = await fetch(
      //   `https://connaq-llm-rwns2svoua-uc.a.run.app/api/process/?project_size=${formData.size}&project_duration=${formData.projectDuration}&start_date=${formData.startDate}`
      // );

      // api without description
      // const res = await fetch(
      //   `https://connaq-jim-rwns2svoua-uc.a.run.app/api/process/?project_size=${formData.size}&project_duration=${formData.projectDuration}&start_date=${formData.startDate}`
      // );

      // api with description
      const res = await fetch(
        `https://connaq-jim-rwns2svoua-uc.a.run.app/api/process/?project_size=${formData.size}&project_duration=${formData.projectDuration}&start_date=${formData.startDate}&description=${formData.projectDes}`
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

  const scrollableRef = useRef(null);
  useEffect(() => {
    const scrollableElement = scrollableRef.current;

    if (scrollableElement) {
      scrollableElement.scrollLeft = 400;
    }
  }, [allTasks]);

  return (
    <div className="flex w-full gap-4 h-full">
      <div className="w-1/5">
        <div className="h-full flex flex-col justify-between">
          <ProjectForm submitForm={submitHandler} isLoading={isLoading} />
          <a href="https://connaqtech.com/" target="_blank" className="block">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>

      <div
        className="w-[80vw] h-[89vh] rounded-s-xl overflow-auto text-black bg-white scrollbar"
        ref={scrollableRef}
      >
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

        {!allTasks.length && !isLoading && !error && (
          <div className="h-full bg-white content-center text-center">
            <label
              htmlFor="projectDes"
              className="font-semibold text-2xl cursor-pointer text-primary hover:underline"
            >
              Generate Gantt Chart
            </label>
          </div>
        )}
        {!!allTasks.length && !isLoading && !error && (
          <div className="w-full bg-white">
            <GanttChart allTasks={allTasks} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
