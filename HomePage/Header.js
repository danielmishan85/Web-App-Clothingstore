import Headerphoto from "../../photos/headerphoto.png";
import { Container, Heading } from "./HeaderStyles";
function Header() {
  return (
    <Container>
      <Heading style={{ borderBottom: "2px solid black" }}>
        <img src={Headerphoto} />
      </Heading>
    </Container>
  );
}

export default Header;
