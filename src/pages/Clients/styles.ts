import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  a {
    color: #1f27f5;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
`;
