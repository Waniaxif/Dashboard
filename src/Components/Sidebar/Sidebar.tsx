"use client";
import {
  BarChartOutlined,
  ContainerOutlined,
  FundProjectionScreenOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, ConfigProvider } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <BarChartOutlined /> },
  { key: "2", icon: <FundProjectionScreenOutlined /> },
  { key: "3", icon: <ContainerOutlined /> },
  { key: "4", icon: <SettingOutlined /> },
];

export default function Sidebar() {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: "#2f3331",
            itemColor: "#777877",
            itemHoverBg: "#3a3a3a",
            itemSelectedBg: "#5b5c5b",
            itemSelectedColor: "#ffffff",
            itemHoverColor: "#ffffff",
          },
        },
      }}
    >
      <div className="fixed left-0 top-0 h-screen w-[72px] z-50 hidden md:flex">
        <Menu
          onClick={onClick}
          selectedKeys={["1"]}
          mode="inline"
          items={items}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden">
        <Menu
          onClick={onClick}
          selectedKeys={["1"]}
          mode="horizontal"
          items={items}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            background: "#2f3331",
            borderTop: "1px solid #3a3a3a",
          }}
          className="flex-1"
        />
      </div>
    </ConfigProvider>
  );
}
