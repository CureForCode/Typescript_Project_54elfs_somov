import { useContext } from "react";
import { BlogContext } from "../context";
import { MessageText } from "../styles";

function Message({ id }: { id: string }) {
  const { messages } = useContext(BlogContext);
  const item = messages.find((m) => m.id === id);
  if (!item) return null;
  return <MessageText>{item.text}</MessageText>;
}

export default Message;
