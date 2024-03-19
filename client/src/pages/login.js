import { Button } from "antd/lib";
import { Form, Input } from "antd/lib";
import { useState, React, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

const Login = () => {
  const [csrfToken, setCsrfToken] = useState("");

  // Function to get CSRF token from cookies
  const getCsrfToken = () => {
    const csrfToken = document.cookie.match(/csrftoken=([^;]+)/);
    if (csrfToken) {
      return csrfToken[1];
    } else {
      return "";
    }
  };

  console.log({ csrfToken });

  // Fetch CSRF token on component mount
  useEffect(() => {
    setCsrfToken(getCsrfToken());
  }, []);

  const handleLogin = (values) => {
    // Send login data to Django URL using Axios with CSRF token in payload
    axios
      .post("http://127.0.0.1:8000/api/login/admin-login/", {
        ...values,
        csrfmiddlewaretoken: csrfToken,
      })
      .then((response) => {
        console.log(response.data); // Handle response data as needed
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="shadow-2xl mt-[7rem] mb-[7rem] rounded-lg">
        <div className="p-5 text-center text-lg font-semibold">Login</div>
        <div className="px-10">
          <Form labelCol={{ span: 24 }} onFinish={handleLogin}>
            <Form.Item label="Username" name="username">
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input placeholder="Password" type="password" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Sign In</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
