import { useRef } from "react";

const ProjectForm = () => {
  const formRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    console.log(Object.fromEntries(formData.entries())); // Log form data as an object
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-3 bg-white text-black p-3 rounded-xl custom-shadow"
      ref={formRef}
    >
      <div>
        <label htmlFor="projectDes" className="block font-bold mb-1">
          Project description
        </label>
        <textarea
          className="resize-none w-full rounded-xl border-2 border-gray-300 p-2 bg-[#e1e1e1]"
          rows={4}
          id="projectDes"
          name="projectDes"
        ></textarea>
      </div>
      <div>
        <label htmlFor="startDate" className="block font-bold mb-1">
          Start date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          className="w-3/5 rounded-xl border-2 border-gray-300 p-2 bg-[#e1e1e1]"
        />
      </div>

      <div>
        <label htmlFor="projectDuration" className="block font-bold mb-1">
          Project Duration (in Months)
        </label>
        <input
          type="number"
          name="projectDuration"
          id="projectDuration"
          className="w-3/5 rounded-xl border-2 border-gray-300 p-2 bg-[#e1e1e1]"
          min={1}
        />
      </div>

      <div>
        <label htmlFor="size" className="block font-bold mb-1">
          Size (sq ft)
        </label>
        <input
          type="text"
          name="size"
          id="size"
          className="w-3/5 rounded-xl border-2 border-gray-300 p-2 bg-[#e1e1e1]"
        />
      </div>

      <div className="text-right mt-4">
        <button
          type="submit"
          className="rounded-xl bg-[#03577b] border border-[#03577b] font-semibold text-white px-4 py-1 hover:scale-110 active:bg-white active:text-[#03577b] custom-shadow"
        >
          Generate
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
