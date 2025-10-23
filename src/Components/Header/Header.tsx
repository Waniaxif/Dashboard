import DropDownButton from "../DropDownButton/DropDownButton";
import {
  AppstoreOutlined,
  CalendarOutlined,
  CameraOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import ExportButton from "../ExportButton/ExportButton";
import HotObjects from "../HotObjects/HotObjects";
import AlarmByReason from "../AlarmByReason/AlarmByReason";
import TouchAlarmsByObject from "../TouchAlarmsByObject/TouchAlarmsByObject";
import ResponseByPriority from "../ResponseByPriority/ResponseByPriority";
import AlarmByPriority from "../AlarmByPriority/AlarmByPriority";
import UnacknowledgedAlarms from "../UnacknowledgedAlarms/UnacknowledgedAlarms";

export default function Header() {
  return (
    <header className="flex flex-col p-4 text-black">
      <div className="text-xl font-semibold capitalize mb-4">
        art sentry dashboard
      </div>
      <div className="flex flex-wrap gap-4 mb-4 lg:justify-between">
        {/* Left Section */}
        <div className="flex flex-wrap items-center gap-4 w-full md:w-full lg:w-auto">
          <DropDownButton text="All Group" StartIcon={<AppstoreOutlined />} />

          {/* Refresh visible only on md */}
          <div className="hidden md:flex">
            <DropDownButton
              text="Refresh: 5 minutes"
              StartIcon={<RetweetOutlined />}
            />
          </div>

          <div className="flex items-center gap-2 rounded-md bg-gray-300 h-8 px-3">
            <CameraOutlined />
            <span className="text-xs">Total Cameras: 53</span>
            <div className="rounded-full bg-gray-100 px-2 h-4 text-xs flex items-center justify-center">
              <div className="rounded-full h-1 w-1 bg-red-700 mr-1"></div>
              <span>4 Offline</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center gap-4 w-full md:w-full lg:w-auto md:justify-start lg:justify-end">
          {/* Hide on md (shown on top in md) */}
          <div className="flex md:hidden">
            <DropDownButton
              text="Refresh: 5 minutes"
              StartIcon={<RetweetOutlined />}
            />
          </div>

          <DropDownButton
            text="This month: Oct 1, 2025 - Oct 31, 2025"
            StartIcon={<CalendarOutlined />}
          />
          <ExportButton />
        </div>
      </div>

      <div className="mb-4">
        <UnacknowledgedAlarms />
      </div>

      <div className="mb-4">
        <AlarmByPriority />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
        <HotObjects />
        <AlarmByReason />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
        <TouchAlarmsByObject />
        <ResponseByPriority />
      </div>
    </header>
  );
}
