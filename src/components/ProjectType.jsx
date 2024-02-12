import React from "react";
import { FormWrapper } from "./FormWrapper";
import { Flex, Form, Radio, Select, InputNumber } from "antd";

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
    updateFields({ [fieldName]: isRadio ? value.target.value : value });
  };

  return (
    <FormWrapper
      title={"Project type"}
      subtitle={"Don't panic - you can also customize these types in settings"}
    >
      <div>
        <div className="mt-6 w-full">
          <Flex className="flex w-full justify-center" direction="column" gap="8px">
            <Radio.Group
              value={payCategory}
              buttonStyle="solid"
              style={{ width: "100%" }}
              onChange={(e) => handleInputChange("payCategory", e, true)}
            >
              <Radio.Button className="w-1/3 text-center" value="Time & Materials">
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
          <label htmlFor="" className="font-semibold text-md">
            Hourly
          </label>
          <span className="text-gray">
            We need hourly rates to track your project billable amount
          </span>
        </div>

        <div className="flex justify-start mt-2 w-full">
          <Form.Item className="w-1/2" initialValue={rateCategory} name="selectedOption" rules={[{ required: true, message: "Please select an option" }]}>
            <Select onChange={(value) => handleInputChange("rateCategory", value)}>
              <Select.Option value="Project Hourly Rate">Project Hourly Rate</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item className="ps-2" name="indianRupees" rules={[{ required: true, message: "Please enter the amount in Indian Rupees" }]}>
            <InputNumber type="number" style={{ width: "100%" }} min={0} onChange={(value) => handleInputChange("amount", value)} defaultValue={amount} />
          </Form.Item>
        </div>

        <div className="flex flex-col justify-start w-full mt-6">
          <label htmlFor="" className="font-semibold text-md">
            Budget
          </label>
          <span className="text-gray">
            We need hourly rates to track your project billable amount
          </span>
        </div>

        <div className="flex justify-start mt-2 w-full">
          <Form.Item className="w-1/2" initialValue={budgetCategory} name="selectedOption" rules={[{ required: true, message: "Please select an option" }]}>
            <Select onChange={(value) => handleInputChange("budgetCategory", value)}>
              <Select.Option value="Hours Per Person">Hours Per Person</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div className="my-2 w-full">
          <Form.Item className="my-1" name="resetEveryMonth" valuePropName="checked">
            <label htmlFor="resetEveryMonth">
              <input
                id="resetEveryMonth"
                type="checkbox"
                className="m-1" 
                onChange={(e) => handleInputChange("resetEveryMonth", e.target.checked)}
                checked={resetEveryMonth}
              />
              Budget resets every month
            </label>
          </Form.Item>
          <Form.Item name="sendEmailAlerts" valuePropName="checked">
            <label htmlFor="sendEmailAlerts">
              <div className="flex items-center">
                <input id="sendEmailAlerts" type="checkbox" className="m-1" checked={sendEmailAlerts} onChange={(e) => handleInputChange("sendEmailAlerts", e.target.checked)} />
                <span>
                  Send email alerts if budget exceeds
                  <span className="mx-2 p-1 border border-gray">80% </span> of
                  budget
                </span>
              </div>
            </label>
          </Form.Item>
        </div>
      </div>
    </FormWrapper>
  );
};

export default ProjectType;
