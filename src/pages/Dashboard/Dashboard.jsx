import ProjectForm from "../../components/ProjectForm/ProjectForm";
import logo from "../../../public/logo.png";
const Dashboard = () => {
  return (
    <div className="flex w-full gap-4 h-full">
      <div className="w-1/5">
        <div className="h-full flex flex-col justify-between">
          <ProjectForm />
          <a href="https://connaqtech.com/" target="_blank" className="block">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
      <div className="flex-grow h-full rounded-s-xl bg-white">
        <div className="text-center text-black h-full flex items-center justify-center font-bold text-6xl">
          <span className="mb-20">Coming soon</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
