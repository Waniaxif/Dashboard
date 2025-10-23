import React, { ReactNode } from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface DropDownButtonTypes {
  StartIcon?: ReactNode;
  Icon?: ReactNode;
  text?: string;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "1st item",
  },
  {
    key: "2",
    label: "2nd  item",
  },
  {
    key: "3",
    label: "3rd item",
  },
];
export default function DropDownButton({
  StartIcon,
  Icon = <DownOutlined />,
  text,
}: DropDownButtonTypes) {
  return (
    <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
      <Button>
        {StartIcon}
        {text}
        {Icon}
      </Button>
    </Dropdown>
  );
}
