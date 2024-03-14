import { Form, Input, Select, Button, Upload } from "antd/lib";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons/lib";
const seeker = () => {
  const [isStatus, setIsStatus] = useState();
  const [isResume, setIsResume] = useState(null);
  const onChange = (value) => {
    setIsStatus(value);
  };

  const handleUpload = (file) => setIsResume(file);

  const handleAddSeeker = (value) => {
    if (value) {
      value.status = isStatus;
      value.resume = isResume;
      console.log(value);
    }
  };

  // adding comments

  return (
    <>
      <div>
        <div className="p-5 text-center text-lg font-semibold">
          Register as Seeker
        </div>
        <div className="px-80">
          <Form labelCol={{ span: 24 }} onFinish={handleAddSeeker}>
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
              {" "}
              <Select
                onChange={onChange}
                options={[
                  {
                    value: "fresher",
                    label: "I m Fresher",
                  },
                  {
                    value: "experienced",
                    label: "I m Experienced",
                  },
                ]}
                placeholder="Select status"
              />
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

export default seeker;
