"use client";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
        size="large"
        tip="Loading..."
      />
    </div>
  );
}
