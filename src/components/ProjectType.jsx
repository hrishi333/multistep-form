import React from "react";
import { FormWrapper } from "./FormWrapper";
import { Flex, Form, Radio, Select, InputNumber,Checkbox } from "antd";

const ProjectType = ({ payCategory }) => {
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
              defaultValue="a"
              buttonStyle="solid"
              style={{ width: "100%" }}
            >
              <Radio.Button className="w-1/3 text-center" value="a">
                Time & Materials
              </Radio.Button>
              <Radio.Button className="w-1/3 text-center" value="b">
                Fixed fee
              </Radio.Button>
              <Radio.Button className="w-1/3 text-center" value="c">
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
            initialValue="Project Hourly Rate"
            name="selectedOption"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Select>
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
              style={{ width: "100%" }}
              min={0}
              formatter={(value) => `₹ ${value}`}
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
            initialValue="Hours Per Person"
            name="selectedOption"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Select>
              <Select.Option value="Hours Per Person">
                Hours Per Person
              </Select.Option>
            </Select>
          </Form.Item>

          
        </div>
        
        <div className=" my-2 w-full">
        <Form.Item className="my-1" name="budgetReset" valuePropName="checked">
        <Checkbox>Budget resets every month</Checkbox>
      </Form.Item>

      <Form.Item name="checkboxOption2" valuePropName="checked">
        <Checkbox>Send email alerts if budget exeeds<span className="mx-2 p-1 border border-gray">80% </span> of budget </Checkbox>
      </Form.Item>
        </div>


      </div>
    </FormWrapper>
  );
};

export default ProjectType;
