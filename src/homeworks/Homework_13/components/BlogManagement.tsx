import { useContext, useState } from "react";
import Button from "components/Button/Button";
import { BlogContext } from "../context";
import Card from "./Card";
import { Panel, Label, Textarea, CardList } from "../styles";

function BlogManagement() {
  const { messages, addMessage } = useContext(BlogContext);
  const [draft, setDraft] = useState("");

  const handlePost = () => {
    addMessage(draft);
    setDraft("");
  };

  return (
    <>
      <Panel>
        <Label htmlFor="blog-ta">Ваше сообщение</Label>
        <Textarea
          id="blog-ta"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Напишите что-нибудь..."
        />
        <Button name="Запостить" onClick={handlePost} />
      </Panel>
      <CardList>
        {messages.map(({ id, createdAt }) => (
          <Card key={id} id={id} createdAt={createdAt} />
        ))}
      </CardList>
    </>
  );
}

export default BlogManagement;
