import React from "react";
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
  {
    key: "1",
    icon: <BarChartOutlined />,
  },
  {
    key: "2",
    icon: <FundProjectionScreenOutlined />,
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
  },
  {
    key: "4",
    icon: <SettingOutlined />,
  },
];

const App: React.FC = () => {
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
      <Menu
        onClick={onClick}
        style={{
          width: 70,
          height: "100vh",
        }}
        selectedKeys={["1"]}
        // defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </ConfigProvider>
  );
};

export default App;
