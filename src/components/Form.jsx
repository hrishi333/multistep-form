import React,{useState} from "react";
import { useMultistepForm } from "../useMultistepForm";
import { Button } from "antd";
import CreateProject from "./CreateProject";
import ProjectType from "./ProjectType";
import SelectView from "./SelectView";
import ManageProject from "./ManageProject";
import { IoIosArrowBack } from "react-icons/io";


const INITIAL_DATA ={
  projectName:"",
  client:"",
  startDate:"",
  endDate:"",
  notes:"",

}

const Form = () => {
  const [data, setData]= useState(INITIAL_DATA)
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <CreateProject {...data}/>,
      <ProjectType {...data}/>,
      <SelectView {...data}/>,
      <ManageProject {...data}/>,
    ]);

  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= steps.length; i++) {
      dots.push(
        <div
          key={i}
          className={` w-2 h-2 mx-1 rounded-full ${
            i <= currentStepIndex + 1 ? "bg-green" : "bg-gray"
          }`}
        ></div>
      );
    }
    return dots;
  };

  function handleSubmit(e) {
    e.preventDefault();
    next();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className=" flex justify-end mt-3">
          {/* {currentStepIndex + 1}/{steps.length} */}
        </div>
        {step}

        <div className="flex w-full justify-evenly items-center mb-2">
          <div className="w-full  m-2 flex justify-start items-center text-white">
            {!isFirstStep && (
              <button className="flex items-center" type="button" onClick={back}>
                <IoIosArrowBack />
                  <span className="p-1">Back</span>
              </button>
            )}
          </div>
          <div className="w-full  bg-blue-500 m-2 flex justify-center items-center text-white">
            {!isLastStep ? (
              <Button
                type="primary"
                className="bg-primary flex justify-center"
                onClick={next}
              >
                Next
              </Button>
            ) : (
              <Button
                type="primary"
                className="bg-primary flex justify-center"
                onClick={next}
              >
                Create Project
              </Button>
            )}
          </div>
          <div className="w-full  bg-blue-500 m-2 flex justify-center items-center text-white"></div>
        </div>

        <div className="flex justify-center">{renderDots()}</div>
      </form>
    </div>
  );
};

export default Form;
