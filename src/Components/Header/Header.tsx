import { Card, Image } from "antd";
import DropDownButton from "../DropDownButton/DropDownButton";
import {
  AppstoreOutlined,
  CalendarOutlined,
  CameraOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import ExportButton from "../ExportButton/ExportButton";
import ReviewButton from "../ReviewButton/ReviewButton";
import HotObjects from "../HotObjects/HotObjects";
import AlarmByReason from "../AlarmByReason/AlarmByReason";
import TouchAlarmsByObject from "../TouchAlarmsByObject/TouchAlarmsByObject";
import ResponseByPriority from "../ResponseByPriority/ResponseByPriority";
import AlarmByPriority from "../AlarmByPriority/AlarmByPriority";

export default function Header() {
  return (
    <header className="flex flex-col p-4 text-black">
      <div className="text-xl font-semibold capitalize mb-4">
        art sentry dashboard
      </div>
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="gap-4 flex items-center">
          <DropDownButton text="All Group" StartIcon={<AppstoreOutlined />} />
          <div className="flex items-center gap-2 rounded-md bg-gray-300 h-8 px-3">
            <CameraOutlined />
            <span className="text-xs">Total Cameras: 53</span>
            <div className="rounded-full bg-gray-100 px-2 h-4 text-xs flex items-center justify-center">
              <div className="rounded-full h-1 w-1 bg-red-700 mr-1"></div>
              <span className="">4 Offline</span>
            </div>
          </div>
        </div>
        <div className=" gap-4 flex items-center">
          <DropDownButton
            text="Refresh: 5 minutes"
            StartIcon={<RetweetOutlined />}
          />
          <DropDownButton
            text="This month: Oct 1, 2025 - Oct 31, 2025"
            StartIcon={<CalendarOutlined />}
          />
          <ExportButton />
        </div>
      </div>
      <div className="mb-4">
        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">
                Unacknowledged Alarms by Priority
              </div>
              <ReviewButton text="Review All" />
            </div>
            <div className="flex w-auto gap-4 overflow-x-auto">
              <Card className="w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <div className="bg-red-200 rounded-full w-12 h-12 flex items-center justify-center ">
                        <Image
                          src="/images/2.png"
                          width={22}
                          height={23}
                          alt="bar chart"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-lg">7 </span>
                        <span className="text-gray-500">Escalated </span>
                      </div>
                    </div>

                    <div className=" bg-gray-300 rounded-full px-2 py-0.5 font-semibold">
                      avg 7 min ago
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 bg-gray-200 p-3 rounded-md">
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="flex gap-2 items-center  ">
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
                      <div className="">
                        <ReviewButton text="Review" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center ">
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
                        <span className="font-semibold text-lg">4 </span>
                        <span className="text-gray-500">Urgent</span>
                      </div>
                    </div>

                    <div className=" bg-gray-300 rounded-full px-2 py-0.5 font-semibold">
                      avg 10 min ago
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 bg-gray-200 p-3 rounded-md">
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="flex gap-2 items-center  ">
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
                      <div className="">
                        <ReviewButton text="Review" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center ">
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
                        <span className="text-gray-500">High </span>
                      </div>
                    </div>

                    <div className=" bg-gray-300 rounded-full px-2 py-0.5 font-semibold">
                      avg 1 hr ago
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 bg-gray-200 p-3 rounded-md">
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="flex gap-2 items-center  ">
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
                      <div className="">
                        <ReviewButton text="Review" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center ">
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

                    <div className=" bg-gray-300 rounded-full px-2 py-0.5 font-semibold">
                      avg 2 hr ago
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 bg-gray-200 p-3 rounded-md">
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="flex gap-2 items-center  ">
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
                      <div className="">
                        <ReviewButton text="Review" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
      <div className="mb-4">
        <AlarmByPriority />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <HotObjects />
        <AlarmByReason />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <TouchAlarmsByObject />
        <ResponseByPriority />
      </div>
    </header>
  );
}
