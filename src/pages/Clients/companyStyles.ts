import styled from "@emotion/styled";

export const CompanyPage = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CompanyCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 600px;
  min-height: 220px;
  padding: 30px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const CompanyTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #000a42;
`;

export const CompanyText = styled.p`
  font-size: 16px;
  color: #111827;
  line-height: 1.5;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  width: 100%;
`;
