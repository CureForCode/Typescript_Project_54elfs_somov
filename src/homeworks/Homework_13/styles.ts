import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  width: 100%;
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 680px;
  padding: 16px;
  border: 1px solid #000;
  border-radius: 8px;
  background: #fff;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const Textarea = styled.textarea`
  min-height: 100px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
`;

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  background: #f9f9f9;
`;

export const Author = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #000a42;
`;

export const Timestamp = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

export const MessageText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
