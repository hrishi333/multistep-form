import React from "react";
import {Card,Flex} from 'antd';

const UsersCard = ({ currentActive,logo, title, description }) => {

  return (
    <Card hoverable className={`w-full mb-2 border ${currentActive ? "border-primary":"border-[#e6e6e6]"}`} style={{ padding: "0" }}>
      <Flex gap="8px" className="">
        {/* Logo */}
        <div className="flex items-center">
          {logo}
        </div>

        {/* Title and Description */}
        <div className="ms-2 ">
          <h2 className="text-[lg] ">{title}</h2>
          <p className="text-gray">{description}</p>
        </div>
      </Flex>
    </Card>
  );
};

export default UsersCard;
