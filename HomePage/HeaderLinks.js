//import CategoryPage from "../Category/CategoryPage";
import { Link } from "react-router-dom";
//import products from "../../data";
import { Container } from "@mui/system";

function HeaderLinks(props) {
  return (
    <Container>
      <Link
        style={{
          textDecoration: "none",
          fontSize: 12,
        }}
        to="/categories"
      >
        <h1 style={{ color: "black" }}>Brands</h1>
      </Link>
    </Container>
  );
}

export default HeaderLinks;
