import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import Form from "./components/Form";

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const modalFooter = null;


  useEffect(()=>{
    showModal();
  },[])



  return (
    <>
      <div className="bg-[#FFF] w-full h-screen flex justify-center items-center">
        <Button
          type="primary"
          size={"large"}
          className="custom-ok-button"
          onClick={showModal}
        >
          Fill Up Form
        </Button>
        <Modal
          title=""
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ className: "custom-ok-button" }}
          footer={modalFooter}
        >
          
          <Form handleCancel={handleCancel} />
          
        </Modal>
      </div>
    </>
  );
}

export default App;
