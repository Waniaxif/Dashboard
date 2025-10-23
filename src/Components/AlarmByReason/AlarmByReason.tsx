"use client";

import { Card } from "antd";
import { ExpandAltOutlined, ExportOutlined } from "@ant-design/icons";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, ChartTooltip, Legend);

export default function AlarmByReason() {
  const reasons = [
    { color: "#1677ff", count: 125, percent: 30.4, name: "Touch-Intentional" },
    { color: "#fa8c16", count: 105, percent: 23.45, name: "Touch-Inadvertent" },
    { color: "#faad14", count: 92, percent: 18.6, name: "Proximity" },
    { color: "#52c41a", count: 87, percent: 15.2, name: "Staff/Vendor" },
    { color: "#ff4d4f", count: 64, percent: 12.35, name: "Other" },
  ];

  const total = 473;

  const data = {
    datasets: [
      {
        data: reasons.map((r) => r.count),
        backgroundColor: reasons.map((r) => r.color),
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Alarms by Reason</div>
        <div className="flex items-center gap-3">
          <ExportOutlined />
          <ExpandAltOutlined />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {reasons.map((r, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-semibold" style={{ color: r.color }}>
                  {r.count}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-1 rounded">
                  {r.percent}%
                </span>
              </div>
              <span className="text-gray-500 text-sm">{r.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-32 h-32">
            <Doughnut
              data={data}
              options={{ plugins: { legend: { display: false } } }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold">{total}</span>
              <span className="text-gray-500 text-xs">Total Alarms</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
