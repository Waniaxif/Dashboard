"use client";

import React from "react";
import Image from "next/image";
import { Card } from "antd";
import ReviewButton from "../ReviewButton/ReviewButton";

const UnacknowledgedAlarms: React.FC = () => {
  return (
    <div className="mb-4">
      <Card>
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">
              Unacknowledged Alarms by Priority
            </div>
            <ReviewButton text="Review All" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <Card className="w-full">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <div className="bg-red-200 rounded-full w-12 h-12 flex items-center justify-center">
                      <Image
                        src="/images/2.png"
                        width={22}
                        height={23}
                        alt="bar chart"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">7</span>
                      <span className="text-gray-500">Escalated</span>
                    </div>
                  </div>

                  <div className="bg-gray-300 rounded-full px-2 py-0.5 font-semibold">
                    avg 7 min ago
                  </div>
                </div>

                <div className="flex flex-col gap-2 bg-gray-200 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex gap-2 items-center">
                        <Image
                          src="/images/2.png"
                          width={12}
                          height={13}
                          alt="bar chart"
                        />
                        <span className="capitalize">The oragon trail</span>
                      </div>
                      <span className="text-gray-500">10 min ago</span>
                    </div>
                    <ReviewButton text="Review" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="w-full">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/images/3.png"
                          width={22}
                          height={8}
                          alt="bar chart"
                        />
                        <Image
                          src="/images/3.png"
                          width={22}
                          height={8}
                          alt="bar chart"
                        />
                        <Image
                          src="/images/3.png"
                          width={22}
                          height={8}
                          alt="bar chart"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">4</span>
                      <span className="text-gray-500">Urgent</span>
                    </div>
                  </div>

                  <div className="bg-gray-300 rounded-full px-2 py-0.5 font-semibold">
                    avg 10 min ago
                  </div>
                </div>

                <div className="flex flex-col gap-2 bg-gray-200 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex gap-2 items-center">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/images/3.png"
                            width={12}
                            height={5}
                            alt="bar chart"
                          />
                          <Image
                            src="/images/3.png"
                            width={12}
                            height={5}
                            alt="bar chart"
                          />
                          <Image
                            src="/images/3.png"
                            width={12}
                            height={5}
                            alt="bar chart"
                          />
                        </div>
                        <span className="capitalize">Newland house</span>
                      </div>
                      <span className="text-gray-500">24 min ago</span>
                    </div>
                    <ReviewButton text="Review" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="w-full">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/images/3.png"
                          width={22}
                          height={8}
                          alt="bar chart"
                        />
                        <Image
                          src="/images/3.png"
                          width={22}
                          height={8}
                          alt="bar chart"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">22</span>
                      <span className="text-gray-500">High</span>
                    </div>
                  </div>

                  <div className="bg-gray-300 rounded-full px-2 py-0.5 font-semibold">
                    avg 1 hr ago
                  </div>
                </div>

                <div className="flex flex-col gap-2 bg-gray-200 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex gap-2 items-center">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/images/3.png"
                            width={12}
                            height={5}
                            alt="bar chart"
                          />
                          <Image
                            src="/images/3.png"
                            width={12}
                            height={5}
                            alt="bar chart"
                          />
                        </div>
                        <span className="capitalize">alexender pope</span>
                      </div>
                      <span className="text-gray-500">1 hr ago</span>
                    </div>
                    <ReviewButton text="Review" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Card 4 */}
            <Card className="w-full">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <Image
                        src="/images/3.png"
                        width={22}
                        height={8}
                        alt="bar chart"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">42</span>
                      <span className="text-gray-500">Standard</span>
                    </div>
                  </div>

                  <div className="bg-gray-300 rounded-full px-2 py-0.5 font-semibold">
                    avg 2 hr ago
                  </div>
                </div>

                <div className="flex flex-col gap-2 bg-gray-200 p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex gap-2 items-center">
                        <Image
                          src="/images/3.png"
                          width={12}
                          height={5}
                          alt="bar chart"
                        />
                        <span className="capitalize">hope</span>
                      </div>
                      <span className="text-gray-500">2 hr ago</span>
                    </div>
                    <ReviewButton text="Review" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UnacknowledgedAlarms;
