import { Button, Input } from "antd/lib";
import { Form } from "antd/lib";
import Header from "./components/Header";
import { Col, Row } from "antd/lib";
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons/lib";

const Login = () => {
  const handleLogin = (value) => {
    console.log(value);
  };
  return (
    // header
    <div className="mt-[6.5rem] mb-[7rem]">
      {/* <div className="flex p-5 border">
        <div className="font-semibold text-2xl">Jobs Zone</div>
        <div className="ml-auto">
          <Button className="mr-[.5rem] text-black" type="primary">
            Home
          </Button>
          <Button type="primary" className=" text-black ">
            Register
          </Button>
        </div>
      </div> */}
      {/* body */}
      <div className="text-center mt-[1rem] px-[25rem] mb-[1rem]">
        <div className="p-5 rounded-lg border shadow-lg">
          <div className="text-center text-2xl font-semibold mb-[2rem]">
            Login
          </div>
          <Form onFinish={handleLogin}>
            <Form.Item name="username">
              <Input placeholder="username" />
            </Form.Item>
            <Form.Item name="password">
              <Input placeholder="password" />
            </Form.Item>
            <div className="text-end">
              <Button type="link">Forget Password?</Button>
            </div>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                ghost
                className="mt-[1rem]"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      {/* footer */}
      {/* <div className="border">
        <Row>
          <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
            }}
          >
            <div className="font-semibold text-2xl mb-[2rem]">Jobs Zone</div>

            <div className="mb-[.5rem]">connect with us</div>
            <div className="flex gap-3">
              <FacebookFilled />
              <InstagramFilled />
              <TwitterSquareFilled />
              <LinkedinFilled />
            </div>
          </Col>{" "}
          <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
            }}
          >
            <div className="flex flex-col gap-5">
              <div>About us</div>
              <div>Careers</div>
              <div>Report issue</div>
              <div></div>
            </div>
          </Col>{" "}
          <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            lg={{
              span: 6,
              offset: 2,
            }}
          >
            <div className="flex flex-col gap-5">
              <div>Privacy policy</div>
              <div>Terms & conditions</div>
              <div>Trust & safety</div>
              <div></div>
            </div>
          </Col>
        </Row>
      </div> */}
    </div>
  );
};

export default Login;
