"use client";

import { Card, Table, Progress } from "antd";
import React from "react";
import DropDownButton from "../DropDownButton/DropDownButton";
import Image from "next/image";
import ExportExpantButton from "../ExportExpantButton/ExportExpantButton";

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
      icon: (
        <div className="w-10 h-10 flex items-center justify-center">
          <Image src="/images/2.png" width={20} height={20} alt="escalated" />
        </div>
      ),
    },
    {
      key: "2",
      priority: "Urgent",
      totalAlarms: 75,
      avgResTime: 4.12,
      progress: 50,
      icon: (
        <div className=" w-10 h-10 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Image src="/images/3.png" width={20} height={6} alt="urgent" />
            <Image src="/images/3.png" width={20} height={6} alt="urgent" />
            <Image src="/images/3.png" width={20} height={6} alt="urgent" />
          </div>
        </div>
      ),
    },
    {
      key: "3",
      priority: "High",
      totalAlarms: 32,
      avgResTime: 5.44,
      progress: 70,
      icon: (
        <div className=" w-10 h-10 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Image src="/images/3.png" width={20} height={6} alt="high" />
            <Image src="/images/3.png" width={20} height={6} alt="high" />
          </div>
        </div>
      ),
    },
    {
      key: "4",
      priority: "Standard",
      totalAlarms: 12,
      avgResTime: 5.98,
      progress: 90,
      icon: (
        <div className="w-10 h-10 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Image src="/images/3.png" width={20} height={6} alt="standard" />{" "}
          </div>
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (_: string, record: PriorityData) => (
        <div className="flex items-center gap-3">
          {record.icon}
          <span className="text-gray-700 font-medium">{record.priority}</span>
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
          <div className="text-lg font-semibold">Response by</div>
          <DropDownButton text="Priority" />
        </div>
        <div className="">
          <ExportExpantButton />
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
