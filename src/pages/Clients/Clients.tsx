import { Link } from "react-router-dom";
import { PageWrapper, List, Item, Title } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <Title>Our Clients</Title>
      <List>
        <Item><Link to="/clients/facebook">Facebook</Link></Item>
        <Item><Link to="/clients/google">Google</Link></Item>
        <Item><Link to="/clients/netflix">Netflix</Link></Item>
      </List>
    </PageWrapper>
  );
}

export default Clients;
