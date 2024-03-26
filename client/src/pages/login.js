import { Button, Form, Input, message } from "antd/lib";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/services/auth"; // Update the import path accordingly
import { useRouter } from "next/router";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);

  const userRole = user?.roles[0];

  useEffect(() => {
    if (error) {
      message.error(error); // Display error message if there's an error
    }
  }, [error]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      await dispatch(loginUser(formData)); // Dispatch the loginUser async thunk with form data
      if (user && userRole === "admin") {
        router.push("/admin/home");
      } else if (user && userRole === "recruiter") {
        router.push("/recruiter/home");
      } else if (user && userRole === "seeker") {
        router.push("/seeker/home");
      } else if (user) {
        router.push("/home");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="shadow-2xl mt-[7rem] mb-[7rem] rounded-lg">
        <div className="p-5 text-center text-lg font-semibold">Login</div>
        <div className="px-10">
          <Form labelCol={{ span: 24 }} onFinish={handleLogin}>
            <Form.Item label="Username" name="username">
              <Input
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
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
