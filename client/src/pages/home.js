import React from "react";
import { Avatar, Button, Card, Progress, Tabs } from "antd/lib";
import {
  InfoCircleOutlined,
  RightOutlined,
  ThunderboltOutlined,
  HomeOutlined,
  WalletOutlined,
  ShoppingOutlined,
  BookOutlined,
  UserOutlined,
  StarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons/lib";

const twoColors = {
  "0%": "#108ee9",
  "100%": "#87d068",
};
const { Meta } = Card;

const home = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Profile(20)",
      children: (
        <Card
          style={{
            width: 300,
          }}
        >
          <Avatar size={50} icon={<UserOutlined />} />
          <div className="font-semibold">Software Developer</div>
          <div>
            Samby Innvotion{" "}
            <span className="ml-[1rem]">
              <StarOutlined /> 3.5
            </span>
          </div>
          <div className="text-gray-400">
            {" "}
            <EnvironmentOutlined className="mr-[.5rem]" />
            Varanasi, Uttar Pradesh
          </div>
        </Card>
      ),
    },
    {
      key: "2",
      label: "Preferences(10)",
      children: (
        <Card
          style={{
            width: 300,
          }}
        >
          <Avatar size={50} icon={<UserOutlined />} />
          <div className="font-semibold">Sales</div>
          <div>
            Samby Innvotion{" "}
            <span className="ml-[1rem]">
              <StarOutlined /> 3.5
            </span>
          </div>
          <div className="text-gray-400">
            {" "}
            <EnvironmentOutlined className="mr-[.5rem]" />
            Varanasi, Uttar Pradesh
          </div>
        </Card>
      ),
    },
    {
      key: "3",
      label: "You might like(5)",
      children: (
        <Card
          style={{
            width: 300,
          }}
        >
          <Avatar size={50} icon={<UserOutlined />} />
          <div className="font-semibold">Marketting</div>
          <div>
            Samby Innvotion{" "}
            <span className="ml-[1rem]">
              <StarOutlined /> 3.5
            </span>
          </div>
          <div className="text-gray-400">
            {" "}
            <EnvironmentOutlined className="mr-[.5rem]" />
            Varanasi, Uttar Pradesh
          </div>
        </Card>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-center gap-10 mt-[1rem] mb-[1rem]">
        {/* profile section */}
        <div className="border shadow-2xl rounded-2xl flex flex-col items-center justify-start p-5 w-[15rem]">
          <div>
            <Avatar
              src={
                <img
                  src={
                    "https://t4.ftcdn.net/jpg/00/65/10/47/360_F_65104718_x17a76wzWKIm3BlhA6uyYVkDs9982c6q.jpg"
                  }
                  alt="profile"
                />
              }
              size={64}
              className="mb-[.25rem]"
            />
            <Progress
              percent={99.9}
              strokeColor={twoColors}
              className="mb-[.5rem]"
            />
          </div>
          <div className="mb-[.25rem]">Jatin Kumar Chaurasia</div>
          <div className="mb-[.25rem]">@Samby</div>
          <div className="mb-[.25rem]">Last Updated at 7m ago</div>
          <div className="mb-[.25rem]">
            <Button type="primary" ghost>
              View Profile
            </Button>
          </div>
          <div className="border shadow-lg bg-gray-300 rounded-lg p-2 mt-[1rem]">
            <div className="font-semibold mb-[.25rem]">
              Profile Performance{" "}
              <InfoCircleOutlined className="!text-[14px]" />
            </div>
            <div className="flex gap-5">
              <div>
                <div className="font-thin">Search Appearnace </div>
                {/* <div>Appearnace</div> */}
                <div className="font-thin">
                  23 <RightOutlined className="!text-[10px]" />
                </div>
              </div>
              <div className="pl-2 border-l border-solid border-black">
                <div className="font-thin">Recruiter Action</div>
                {/* <div>Action</div> */}
                <div className="font-thin">
                  23 <RightOutlined className="!text-[10px]" />
                </div>
              </div>
            </div>
            <div className="flex mt-[.5rem]">
              <div>
                <ThunderboltOutlined />
              </div>
              <div>Get 3x boost to your profile performance</div>
            </div>
          </div>
          <div className="mt-[1rem] flex flex-col gap-5">
            <div>
              <HomeOutlined className="mr-[1rem]" />
              Home
            </div>
            <div>
              <WalletOutlined className="mr-[1rem]" />
              Jobs
            </div>
            <div>
              <ShoppingOutlined className="mr-[1rem]" />
              Companies
            </div>
            <div>
              <BookOutlined className="mr-[1rem]" />
              Blog
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 grow">
          {/* jobs section */}
          <div className="border shadow-2xl rounded-2xl p-5">
            <div className="flex">
              <div className="font-semibold">Recommended jobs for you</div>
              <Button type="link" className="ml-auto">
                View all
              </Button>
            </div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
          {/* 75 Early access roles from top companies near-info */}
          <div className="border shadow-2xl rounded-2xl p-5">
            <div className="flex">
              <div className="font-semibold">Top companies</div>
              <Button type="link" className="ml-auto">
                View all
              </Button>
            </div>
            <div>
              <Card
                className="mt-[1rem] flex flex-col items-center"
                style={{
                  width: 150,
                }}
              >
                <div className="text-center">
                  <Avatar size={50} icon={<UserOutlined />} />
                  <div>Samby Innvotion </div>
                  <div className="flex gap-5">
                    <div>
                      <StarOutlined /> 3.5
                    </div>
                    <div className="pl-2 border-l border-solid border-black">
                      201 Reviews
                    </div>
                  </div>
                  <Button className="mt-[.5rem]" type="link">
                    View Jobs
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* blogs */}

          <div className="border shadow-2xl rounded-2xl p-5">
            <div className="flex">
              <div className="font-semibold">Stay updated with our blogs</div>
              <Button type="link" className="ml-auto">
                View all
              </Button>
            </div>
            <div>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{
                      width: "100%", // Set image width to 100% of its container (Card)
                      height: "100px", // Set image height to 200 pixels
                      objectFit: "cover", // Ensure the image covers the entire container
                    }}
                  />
                }
              >
                <Meta
                  title="What is Production Engineering?"
                  description={<>Samby blog . 21 March 2023</>}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
