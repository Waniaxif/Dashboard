import { ExpandAltOutlined, ExportOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function ExportExpantButton() {
  const handleClick = () => {
    console.log("Expand button clicked");
  };
  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={() => console.log("Export clicked")}
        type="text"
        icon={<ExportOutlined className="text-gray-600 text-lg" />}
      />

      <Button
        onClick={handleClick}
        type="text"
        icon={<ExpandAltOutlined className="text-gray-600 text-lg" />}
      />
    </div>
  );
}
