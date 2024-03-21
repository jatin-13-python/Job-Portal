import { Button, message } from "antd/lib";
import { Form, Input } from "antd/lib";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { stringify } from 'querystring';


const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isUser, setIsUser] = useState(null);
  const router = useRouter();


  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/admin-login/",
        values
      );
  
      const token = response.data.token;
      localStorage.setItem("token", token);
  
      const user = response.data.user;
  
      // Pass user data as query parameter
      router.push({
        pathname: "/home",
        query: { user: JSON.stringify(user) },
      });
    } catch (error) {
      message.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
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
              <Button type="primary" htmlType="submit" loading={loading}>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
