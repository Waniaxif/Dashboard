import { ExportOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function ExportButton() {
  const handleClick = () => {
    console.log("Export button clicked");
  };
  return (
    <Button
      onClick={handleClick}
      icon={<ExportOutlined />}
      style={{
        backgroundColor: "#454545",
        color: "#fff",
      }}
    >
      Export
    </Button>
  );
}
