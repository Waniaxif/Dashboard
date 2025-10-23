"use client";

import { Card } from "antd";
import ExportExpantButton from "../ExportExpantButton/ExportExpantButton";

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

  // Get the max percent for scaling bars
  const maxPercent = Math.max(...data.map((item) => item.percent));

  return (
    <Card>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Touch Alarms By Object</div>
        <div className=" text-gray-600">
          <ExportExpantButton />
        </div>
      </div>

      {/* Data Rows */}
      <div className="space-y-6">
        {data.map((item, index) => {
          // Calculate relative width (% of maxPercent)
          const relativeWidth = (item.percent / maxPercent) * 100;

          return (
            <div key={index} className="flex justify-between items-start">
              {/* Left Column */}
              <div className="w-[40%]">
                <div className="font-medium text-gray-700">{item.name}</div>
                <div className="text-gray-500 text-sm">{item.count}</div>
              </div>

              {/* Spacer Column */}
              <div className="w-[30%]" />

              {/* Right Column */}
              <div className="w-[30%] flex flex-col">
                {/* Bar scaled relative to maxPercent */}
                <div
                  className="h-6 rounded-md transition-all duration-500"
                  style={{
                    width: `${relativeWidth}%`,
                    backgroundColor: item.color,
                  }}
                />
                {/* Percent below bar */}
                <div className="text-gray-500 text-xs mt-1">
                  {item.percent}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
