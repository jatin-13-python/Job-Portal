import { Button } from "antd/lib";
import React from "react";
import { Col, Row } from "antd/lib";
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons/lib";
import Link from "next/link";

const register = () => {
  return (
    <div>
      {/* <div className="flex p-5 border">
        <div className="font-semibold text-2xl">Jobs Zone</div>
        <div className="ml-auto">
          <Button className="mr-[.5rem] text-black" type="primary">
            Home
          </Button>
          <Button type="primary" className=" text-black ">
            Login
          </Button>
        </div>
      </div> */}
      <div className="mt-[8rem] mb-[12rem] shadow-xl px-[20rem] py-5">
        <div className="text-center font-semibold text-2xl p-5">
          Register as
        </div>
        <div className="mt-[5rem] flex gap-5 justify-center">
          <Link href="/seeker">
            <div className="border p-5 bg-gray-400 rounded-full">
              Job Seeker
            </div>
          </Link>
          <Link href="/company">
            <div className="border p-5 bg-gray-400 rounded-full">Company</div>
          </Link>{" "}
        </div>
      </div>
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

export default register;
