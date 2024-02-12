import React from "react";
import { FormWrapper } from "./FormWrapper";
import { Form, Input, DatePicker, Select, Button } from "antd";
import { FaPlus } from "react-icons/fa";

const CreateProject = ({
  projectName,
  client,
  startDate,
  endDate,
  notes,
  updateFields,
}) => {

  const handleInputChange = (fieldName, value) => {
    updateFields({ [fieldName]: value });
  };

  return (
    <FormWrapper title={"Create a project"}>
      <div>
        <div className="flex">
          <Form.Item
            className="w-full flex flex-col"
            name="projectName"
            rules={[
              { required: true, message: "Please enter the project name" },
            ]}
          >
            <label
              htmlFor="projectName"
              style={{ marginBottom: "1rem" }}
              className="mb-2 font-semibold text-md"
            >
              Project Name
            </label>
            <Input
              value={projectName}
              onChange={(e) =>
                handleInputChange("projectName", e.target.value)
              }
            />
          </Form.Item>
        </div>

        <div className="flex">
          <Form.Item
            name="client"
            className="w-full flex flex-col"
            rules={[{ required: true, message: "Please select a client" }]}
          >
            <label htmlFor="client" className="mb-2 font-semibold text-md">
              Client
            </label>
            <div className="flex flex-row items-center w-full">
              <Select
                value={client}
                onChange={(value) => handleInputChange("client", value)}
                style={{ flex: 1, marginRight: "8px" }}
              >
                <Select.Option value="client1">Client 1</Select.Option>
                <Select.Option value="client2">Client 2</Select.Option>
              </Select>
              <span className="text-sm text-gray p-1">or</span>
              <Button
                className="flex items-center p-2"
                style={{ marginLeft: "8px" }}
              >
                <FaPlus />
                <span className="p-1">Add Client</span>
              </Button>
            </div>
          </Form.Item>
        </div>

        <div className="flex">
          <Form.Item
            className="w-full flex flex-col"
            rules={[
              { required: true, message: "Please select start and end dates" },
            ]}
          >
            <label
              htmlFor="date"
              className="mb-2 font-semibold text-md"
              style={{ alignSelf: "flex-start" }}
            >
              Date
            </label>
            <div className="flex flex-row items-center">
              <Form.Item
                name="startDate"
                rules={[
                  { required: true, message: "Please select the start date" },
                ]}
                style={{ marginRight: "8px", marginBottom: "0" }}
              >
                <DatePicker
                  value={startDate}
                  onChange={(date, dateString) =>
                    handleInputChange("startDate", dateString)
                  }
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <span className="text-md mx-2">-</span>
              <Form.Item
                name="endDate"
                rules={[
                  { required: true, message: "Please select the end date" },
                ]}
                style={{ marginLeft: "8px", marginBottom: "0" }}
              >
                <DatePicker
                  value={endDate}
                  onChange={(date, dateString) =>
                    handleInputChange("endDate", dateString)
                  }
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </div>
          </Form.Item>
        </div>

        <div className="flex">
          <Form.Item
            name="notes"
            className="w-full"
            rules={[{ required: true, message: "Please enter some notes" }]}
          >
            <label
              htmlFor="notes"
              className="mb-2 font-semibold text-md"
              style={{ alignSelf: "flex-start" }}
            >
              Notes
            </label>
            <div className="flex flex-row items-center">
              <Form.Item
                name="notes"
                rules={[{ required: true, message: "Please enter some notes" }]}
                style={{ width: "100%", marginBottom: "0" }}
              >
                <Input.TextArea
                  value={notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  style={{ height: "100px" }}
                />
              </Form.Item>
            </div>
          </Form.Item>
        </div>
      </div>
    </FormWrapper>
  );
};

export default CreateProject;
