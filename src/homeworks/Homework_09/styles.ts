import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 600px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 10, 66, 0.9);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 600px;
  min-height: 240px;
  padding: 28px 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
`;

export const SetupText = styled.h2`
  margin: 0;
  font-size: 20px;
  line-height: 1.45;
  color: #0b0b0b;
  font-weight: 700;
`;

export const PunchlineText = styled.p`
  margin: 10px 0 0;
  font-size: 18px;
  line-height: 1.45;
  color: #2b2b2b;
`;

export const Meta = styled.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #6b7280;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  margin-top: 6px;
`;

export const Button = styled.button`
  border: 1px solid #111827;
  border-radius: 10px;
  padding: 10px 14px;
  background: white;
  cursor: pointer;
  transition: transform 0.08s ease, box-shadow 0.2s ease, filter 0.2s ease;

  &:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }
`;
