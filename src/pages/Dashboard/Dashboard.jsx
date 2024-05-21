import ProjectForm from "../../components/ProjectForm/ProjectForm";
import logo from "/logo.png";
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
      <div
        className="w-[80vw] h-[89vh] rounded-s-xl overflow-x-auto text-black scrollbar"
        style={{ transform: "rotateX(180deg)" }}
      >
        <div
          className="min-w-[200vw] bg-white h-full"
          style={{ transform: "rotateX(180deg)" }}
        >
          <h5 className="font-bold text-7xl py-64 ps-80">Coming soon</h5>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
