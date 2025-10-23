import { Button } from "antd";

interface ReviewButtonTypes {
  text?: string;
}

export default function ReviewButton({ text }: ReviewButtonTypes) {
  return (
    <Button
      style={{
        backgroundColor: "#454545",
        color: "#fff",
      }}
    >
      {text}
    </Button>
  );
}
