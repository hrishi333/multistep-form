import React from "react";
import { FormWrapper } from "./FormWrapper";
import { SlPeople } from "react-icons/sl";
import { RiAdminLine } from "react-icons/ri";
import { FaUsersLine } from "react-icons/fa6";
import UsersCard from "./UsersCard";



const ManageProject = () => {
  return (
    <FormWrapper
      title={"Who can manage projects"}
      subtitle={"Don't panic - you can also customize this types in setting"}
    >
      <div className="mt-4">
       <UsersCard logo={<FaUsersLine className="text-2xl text-gray"/>} title={"Everyone"} description={"all users now to see it. but guest can not access the project"}/>
       <UsersCard logo={<RiAdminLine className="text-2xl text-gray"/>} title={"Only Admin's"} description={"only admins can manage everything"}/>
       <UsersCard logo={<SlPeople className="text-2xl text-gray"/>} title={"Only to specific people"} description={"only specific people can able to see it"}/>
      </div>
    </FormWrapper>
  );
};

export default ManageProject;
