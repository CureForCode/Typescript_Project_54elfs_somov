import Message from "./Message";
import { Author, BlogCard, Timestamp } from "../styles";

type CardProps = {
  id: string;
  createdAt: string;
};

function Card({ id, createdAt }: CardProps) {
  const authorFullName = "Artur Somov";
  const pretty = new Date(createdAt).toLocaleString();

  return (
    <BlogCard>
      <Author>
        <span>{authorFullName}</span>
        <Timestamp>{pretty}</Timestamp>
      </Author>
      <Message id={id} />
    </BlogCard>
  );
}

export default Card;
