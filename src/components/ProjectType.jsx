import React from "react";
import { FormWrapper } from "./FormWrapper";
import { Flex, Form, Radio, Select, InputNumber, Checkbox } from "antd";

const ProjectType = ({
  payCategory,
  rateCategory,
  amount,
  budgetCategory,
  resetEveryMonth,
  sendEmailAlerts,
  updateFields,
}) => {
  const handleInputChange = (fieldName, value, isRadio) => {
    if (typeof value === "boolean") {
      // Handle checkboxes
      return { ...prev, [fieldName]: value };
    } else {
      updateFields({ [fieldName]: isRadio ? value.target.value : value });
    }
  };

  return (
    <FormWrapper
      title={"Project type"}
      subtitle={"Don't panic - you can also customize this types in setting"}
    >
      <div>
        <div className=" mt-6 w-full">
          <Flex
            className="flex w-full justify-center"
            direction="column"
            gap="8px"
          >
            <Radio.Group
              defaultValue={payCategory}
              buttonStyle="solid"
              style={{ width: "100%" }}
              onChange={(e) => handleInputChange("payCategory", e, true)}
            >
              <Radio.Button
                className="w-1/3 text-center"
                value="Time & Materials"
              >
                Time & Materials
              </Radio.Button>
              <Radio.Button className="w-1/3 text-center" value="Fixed fee">
                Fixed fee
              </Radio.Button>
              <Radio.Button className="w-1/3 text-center" value="Non-billable">
                Non-billable
              </Radio.Button>
            </Radio.Group>
          </Flex>
        </div>

        <div className="flex flex-col justify-start w-full mt-6">
          <label htmlFor="" className=" font-semibold text-md">
            Hourly
          </label>
          <span className="text-gray">
            We need hourly rates to track your project billable amount
          </span>
        </div>

        <div className="flex justify-start mt-2 w-full">
          <Form.Item
            className="w-1/2"
            defaultValue={rateCategory}
            name="selectedOption"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Select
              onChange={(value) => handleInputChange("rateCategory", value)}
            >
              <Select.Option value="Project Hourly Rate">
                Project Hourly Rate
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            className="ps-2"
            name="indianRupees"
            rules={[
              {
                required: true,
                message: "Please enter the amount in Indian Rupees",
              },
            ]}
          >
            <InputNumber
              type="number"
              style={{ width: "100%" }}
              min={0}
              /* formatter={(value) => `₹ ${value}`} */
              onChange={(value) => handleInputChange("amount", value)}
              defaultValue={amount}
            />
          </Form.Item>
        </div>

        <div className="flex flex-col justify-start w-full mt-6">
          <label htmlFor="" className=" font-semibold text-md">
            Budget
          </label>
          <span className="text-gray">
            We need hourly rates to track your project billable amount
          </span>
        </div>

        <div className="flex justify-start mt-2 w-full">
          <Form.Item
            className="w-1/2"
            initialValue={budgetCategory}
            defaultValue={budgetCategory}
            name="selectedOption"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Select
              onChange={(value) => handleInputChange("budgetCategory", value)}
            >
              <Select.Option value="Hours Per Person">
                Hours Per Person
              </Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div className=" my-2 w-full">
          <Form.Item
            className="my-1"
            name="resetEveryMonth"
            valuePropName="checked"
          >
            <Checkbox
              onChange={(e) =>
                handleInputChange("resetEveryMonth", e.target.checked)
              }
            >
              Budget resets every month
            </Checkbox>
          </Form.Item>
          <Form.Item name="checkboxOption2" valuePropName="checked">
            <Checkbox>
              Send email alerts if budget exeeds
              <span className="mx-2 p-1 border border-gray">80% </span> of
              budget{" "}
            </Checkbox>
          </Form.Item>
        </div>
      </div>
    </FormWrapper>
  );
};

export default ProjectType;
