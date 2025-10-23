"use client";

import { Card } from "antd";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import ExportExpantButton from "../ExportExpantButton/ExportExpantButton";

ChartJS.register(ArcElement, ChartTooltip, Legend);

export default function AlarmByReason() {
  const reasons = [
    { color: "#1677ff", count: 125, percent: 30.4, name: "Touch-Intentional" },
    { color: "#52c41a", count: 87, percent: 15.2, name: "Staff/Vendor" },
    { color: "#fa8c16", count: 105, percent: 23.45, name: "Touch-Inadvertent" },
    { color: "#ff4d4f", count: 64, percent: 12.35, name: "Other" },
    { color: "#faad14", count: 92, percent: 18.6, name: "Proximity" },
  ];

  const total = 473;

  const data = {
    datasets: [
      {
        data: reasons.map((r) => r.count),
        backgroundColor: reasons.map((r) => r.color),
        borderColor: "#ffffff", // space between segments
        borderWidth: 3,
        cutout: "80%",
      },
    ],
  };

  return (
    <Card>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Alarm by Reason</div>
        <div className="">
          <ExportExpantButton />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left side: alarm data list */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full md:w-auto">
          {reasons.map((r, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center space-x-2">
                {/* Colored dot */}
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: r.color }}
                ></span>

                {/* Value */}
                <span className="font-semibold" style={{ color: r.color }}>
                  {r.count}
                </span>

                {/* Percentage */}
                <span className="text-xs text-gray-500 bg-gray-100 px-1 rounded">
                  {r.percent}%
                </span>
              </div>

              {/* Description */}
              <span className="text-gray-500 text-sm">{r.name}</span>
            </div>
          ))}
        </div>

        {/* Right side: doughnut chart */}
        <div className="flex flex-col items-center justify-center mt-6 md:mt-0 md:ml-6">
          <div className="relative w-32 h-32">
            <Doughnut
              data={data}
              options={{
                plugins: { legend: { display: false } },
                responsive: true,
                maintainAspectRatio: false,
              }}
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
