import { ExportOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function ExportButton() {
  return (
    <Button
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
