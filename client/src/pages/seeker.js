import { Form, Input, Select, Button, Upload } from "antd/lib";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons/lib";

const { Option } = Select;

const Seeker = () => {
  const [isStatus, setIsStatus] = useState();
  const [isResume, setIsResume] = useState(null);
  const [form] = Form.useForm();

  const onChange = (value) => {
    setIsStatus(value);
  };

  const handleUpload = (file) => setIsResume(file);

  const handleAddSeeker = () => {
    const formData = new FormData();
    const formValues = form.getFieldsValue();

    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("contact", formValues.contact);
    formData.append("status", isStatus);
    formData.append("resume", isResume);

    console.log({ formData });

    fetch("http://127.0.0.1:8000/api/seeker-register/register-seeker/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Seeker registered successfully");
          // Handle success
        } else {
          console.error("Failed to register seeker");
          // Handle failure
        }
      })
      .catch((error) => {
        console.error("Error registering seeker:", error);
      });
  };

  return (
    <>
      <div>
        <div className="p-5 text-center text-lg font-semibold">
          Register as Seeker
        </div>
        <div className="px-80">
          <Form form={form} labelCol={{ span: 24 }} onFinish={handleAddSeeker}>
            <Form.Item label="Name" name="name">
              <Input placeholder="Enter name" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter email" />
            </Form.Item>
            <Form.Item label="Contact" name="contact">
              <Input placeholder="Enter number" />
            </Form.Item>
            <Form.Item label="Work Status" name="status">
              <Select onChange={onChange} placeholder="Select status">
                <Option value="fresher">I'm Fresher</Option>
                <Option value="experienced">I'm Experienced</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Resume Upload" name="resume">
              <Upload
                accept=".pdf"
                beforeUpload={(file) => {
                  handleUpload(file);
                  return false;
                }}
              >
                <Button icon={<UploadOutlined />}>Upload Resume</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" ghost>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Seeker;
