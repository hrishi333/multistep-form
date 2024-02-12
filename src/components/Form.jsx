import React, { useState } from "react";
import { useMultistepForm } from "../useMultistepForm";
import { Button } from "antd";
import CreateProject from "./CreateProject";
import ProjectType from "./ProjectType";
import SelectView from "./SelectView";
import ManageProject from "./ManageProject";
import { IoIosArrowBack } from "react-icons/io";

const INITIAL_DATA = {
  projectName: "",
  client: "",
  startDate: "",
  endDate: "",
  notes: "",
  payCategory: "",
  rateCategory: "",
  amount: 0,
  budgetCategory: "",
  resetEveryMonth: false,
  sendEmailAlerts: false,
};

const Form = () => {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <CreateProject {...data} updateFields={updateFields} />,
      <ProjectType {...data} updateFields={updateFields} />,
      <SelectView {...data} updateFields={updateFields} />,
      <ManageProject {...data} updateFields={updateFields} />,
    ]);

  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= steps.length; i++) {
      dots.push(
        <div
          key={i}
          className={` flex items-center mx-2 rounded-full ${
            i <= currentStepIndex + 1 ? " bg-gray " : "bg-gray "
          } ${i === currentStepIndex + 1 ? "w-2 h-1 bg-gray-dark" : "w-1 h-1"}`}
        ></div>
      );
    }
    return dots;
  };

  function handleSubmit(e) {
    e.preventDefault();
    next();
    localStorage.setItem("formData", JSON.stringify(data));
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
              <button
                className="flex items-center"
                type="button"
                onClick={back}
              >
                <IoIosArrowBack />
                <span className="p-1">Back</span>
              </button>
            )}
          </div>
          <div className="w-full  bg-blue-500 m-2 flex justify-center items-center text-white">
            <button
              type="submit"
              className="bg-primary py-2 px-4 rounded-md flex justify-center text-[#fff] hover:bg-purple"
            >
              {isLastStep ? "Create Project" : "Next"}
            </button>
          </div>
          <div className="w-full  bg-blue-500 m-2 flex justify-center items-center text-white"></div>
        </div>

        <div className="flex justify-center">{renderDots()}</div>
      </form>
    </div>
  );
};

export default Form;
