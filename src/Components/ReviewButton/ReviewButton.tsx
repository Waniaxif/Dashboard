import { Button } from "antd";

interface ReviewButtonTypes {
  text?: string;
}

export default function ReviewButton({ text }: ReviewButtonTypes) {
  const handleClick = () => {
    console.log("Review button clicked");
  };
  return (
    <Button
      onClick={handleClick}
      style={{
        backgroundColor: "#454545",
        color: "#fff",
      }}
    >
      {text}
    </Button>
  );
}
