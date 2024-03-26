import React from "react";
import { Form, Input, Button } from "antd/lib";
import axios from "axios";

const Company = () => {
  const handleAddCompany = async (values) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/company-register/register-company/",
        values
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="p-10 mb-[1rem]">
        <div className="p-5 text-center">Register as Company</div>
        <div className="px-80">
          <Form labelCol={{ span: 24 }} onFinish={handleAddCompany}>
            <Form.Item label="Name" name="name">
              <Input placeholder="Enter name" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password placeholder="Enter password" />
            </Form.Item>
            <Form.Item>
              <Button
                className="mt-[2rem]"
                htmlType="submit"
                type="primary"
                ghost
                block
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Company;
