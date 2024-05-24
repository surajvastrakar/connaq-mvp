import ProjectForm from "../../components/ProjectForm/ProjectForm";
import logo from "/logo.png";
import comingSoon from "/coming-soon.jpg";
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
      <div className="w-[80vw] h-[89vh] rounded-s-xl overflow-auto text-black scrollbar">
        <div className="w-[110%]  bg-white">
          <img src={comingSoon} alt="coming soon" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
