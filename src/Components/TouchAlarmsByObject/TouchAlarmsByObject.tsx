"use client";

import { Card, Progress } from "antd";
import { ExpandAltOutlined, ExportOutlined } from "@ant-design/icons";

export default function TouchAlarmsByObject() {
  const data = [
    {
      name: "P23C155 Alarm Zone 1",
      count: 27,
      percent: 30.4,
      color: "#1677ff",
    },
    {
      name: "P23C155 - Alarm Zone 2",
      count: 20,
      percent: 23.45,
      color: "#fa8c16",
    },
    {
      name: "P8C77 - Alarm Zone 1",
      count: 12,
      percent: 18.6,
      color: "#faad14",
    },
    {
      name: "P27C149 - Alarm Zone 4",
      count: 12,
      percent: 15.2,
      color: "#52c41a",
    },
  ];

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Touch Alarms By Object</div>
        <div className="flex items-center gap-3">
          <ExportOutlined />
          <ExpandAltOutlined />
        </div>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">{item.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">{item.count}</span>
              <span className="text-gray-500 text-xs">{item.percent}%</span>
            </div>
            <Progress
              percent={item.percent}
              showInfo={false}
              strokeColor={item.color}
              className="h-2!"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
