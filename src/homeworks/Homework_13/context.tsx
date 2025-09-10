import { createContext, useState, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

type BlogMessage = {
  id: string;
  text: string;
  createdAt: string;
};

type BlogContextValue = {
  messages: BlogMessage[];
  addMessage: (text: string) => void;
};

//Создание контекста с начальными пустыми значениями
export const BlogContext = createContext<BlogContextValue>({
  messages: [],
  addMessage: () => {},
});

export function BlogProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<BlogMessage[]>([]);

  const addMessage = (text: string) => {
    const value = text.trim();
    if (!value) return;

    setMessages((prev) => [
      {
        id: uuidv4(),
        text: value,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  return (
    <BlogContext.Provider value={{ messages, addMessage }}>
      {children}
    </BlogContext.Provider>
  );
}
