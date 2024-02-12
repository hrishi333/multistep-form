import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { Card, Flex, Radio } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";


const SelectView = ({ selectView: selectValue, updateFields }) => {
  const [selectView, setSelectView] = useState(selectValue || "");

  const handleCardClick = (view) => {
    setSelectView(view);
    updateFields({ selectView: view });
  };

  

  return (
    <FormWrapper
      title={"Select View"}
      subtitle={"You can also customize these views in settings"}
    >
      <div className="mt-6 mb-32">
        <Flex gap="16px" className="justify-center">
          <div className="w-1/2">
            <Card
              hoverable
              className={`w-full ${
                selectView === "List" ? "border-primary" : ""
              }`}
              onClick={() => handleCardClick("List")}
            >
              <UnorderedListOutlined className={`${selectView === "List" ? "text-primary" : "text-gray"} text-4xl text-center flex justify-center`} />
            </Card>
            <Card.Meta title="List" className={`text-center ${
                selectView === "List" ? "text-primary" : "text-gray"
              } p-4`} />
          </div>

          <div className="w-1/2">
            <Card
              hoverable
              className={`w-full px-[20px] ${
                selectView === "Board" ? "border-primary" : ""
              }`}
              onClick={() => handleCardClick("Board")}
            >
              <AppstoreOutlined className={`${selectView === "Board" ? "text-primary" : "text-gray"} text-4xl text-center flex justify-center`} />
            </Card>
            <Card.Meta title="Board" className={`text-center ${
                selectView === "Board" ? "text-primary" : "text-gray"
              } p-4`} />
          </div>
        </Flex>
      </div>
    </FormWrapper>
  );
};


export default SelectView;
