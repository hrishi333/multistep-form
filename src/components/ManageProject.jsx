import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { SlPeople } from "react-icons/sl";
import { RiAdminLine } from "react-icons/ri";
import { FaUsersLine } from "react-icons/fa6";
import UsersCard from "./UsersCard";

const ManageProject = ({ manageProjects: project, updateFields }) => {
  const [manageProjects, setManageProjects] = useState(project);

  const handleViewChange = (view) => {
    console.log("New View:", view); 
    setManageProjects(view);
    updateFields({  manageProjects: view }); 
  };

  console.log("Current Manage Projects:", manageProjects); 

  return (
    <FormWrapper
      title={"Who can manage projects"}
      subtitle={"Don't panic - you can also customize these types in setting"}
    >
      <div className="mt-4">
        <span onClick={() => handleViewChange("Everyone")}>
        <UsersCard
          currentActive={manageProjects==="Everyone"?true:false}
          logo={<FaUsersLine className="text-2xl text-gray" />}
          title={"Everyone"}
          description={"All users can see it, but guests cannot access the project"}
          
        />
        </span>
      <span  onClick={() => handleViewChange("Admins")}>
      <UsersCard
          currentActive={manageProjects==="Admins"?true:false}
          logo={<RiAdminLine className="text-2xl text-gray" />}
          title={"Only Admin's"}
          description={"Only admins can manage everything"}
         
        />
      </span>
     <span    onClick={() => handleViewChange("Specific People")}>
     <UsersCard
          currentActive={manageProjects==="Specific People"?true:false}
          logo={<SlPeople className="text-2xl text-gray" />}
          title={"Only to specific people"}
          description={"Only specific people can see it"}
       
        />
     </span>
      
      </div>
    </FormWrapper>
  );
};

export default ManageProject;
