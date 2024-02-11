import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { Card, Flex, Radio } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";

const SelectView = () => {
  

  return (
    <FormWrapper
      title={"Select View"}
      subtitle={"You can also customize this views in setting"}
    >
      <div className="mt-6 mb-32">
        <Flex gap="16px" className="justify-center">
          <div className="w-1/2">
            <Card hoverable className="w-full">
              <UnorderedListOutlined className="text-gray text-4xl text-center flex justify-center" />
            </Card>
            <Card.Meta title="List" className="text-center text-gray p-4" />
          </div>

          <div className="w-1/2">
            <Card hoverable className="w-full px-[20px]">
              <AppstoreOutlined className="text-gray text-4xl text-center flex justify-center" />
            </Card>
            <Card.Meta title="Board" className="text-center text-gray p-4" />
          </div>
        </Flex>
      </div>
    </FormWrapper>
  );
};

export default SelectView;
