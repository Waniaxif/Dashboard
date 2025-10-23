"use client";

import { Card, Table, Progress } from "antd";
import { ExpandAltOutlined, ExportOutlined } from "@ant-design/icons";
import React from "react";
import DropDownButton from "../DropDownButton/DropDownButton";

interface PriorityData {
  key: string;
  priority: string;
  totalAlarms: number;
  avgResTime: number;
  progress: number;
  icon: React.ReactNode;
}

export default function ResponseByPriority() {
  const data: PriorityData[] = [
    {
      key: "1",
      priority: "Escalated",
      totalAlarms: 42,
      avgResTime: 3.02,
      progress: 30,
      icon: <span className="text-red-500 text-lg">⬢</span>,
    },
    {
      key: "2",
      priority: "Urgent",
      totalAlarms: 75,
      avgResTime: 4.12,
      progress: 50,
      icon: <span className="text-yellow-500 text-lg">⬢</span>,
    },
    {
      key: "3",
      priority: "High",
      totalAlarms: 32,
      avgResTime: 5.44,
      progress: 70,
      icon: <span className="text-orange-400 text-lg">⬢</span>,
    },
    {
      key: "4",
      priority: "Standard",
      totalAlarms: 12,
      avgResTime: 5.98,
      progress: 90,
      icon: <span className="text-yellow-300 text-lg">⬢</span>,
    },
  ];

  const columns = [
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (record: PriorityData) => (
        <div className="flex items-center gap-2">
          {record.icon}
          <span>{record.priority}</span>
        </div>
      ),
    },
    {
      title: "Total Alarms",
      dataIndex: "totalAlarms",
      key: "totalAlarms",
      align: "center" as const,
    },
    {
      title: "Avg Res Time (sec)",
      dataIndex: "avgResTime",
      key: "avgResTime",
      align: "center" as const,
      render: (text: number, record: PriorityData) => (
        <div className="flex items-center gap-3 justify-center">
          <Progress
            percent={record.progress}
            showInfo={false}
            strokeColor="#223f36"
            className="w-24"
          />
          <span>{text}</span>
        </div>
      ),
    },
  ];

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold">Response By</div>
          <DropDownButton text="Priority" />
        </div>
        <div className="flex items-center gap-3">
          <ExportOutlined />
          <ExpandAltOutlined />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        showHeader
        bordered={false}
      />
    </Card>
  );
}
