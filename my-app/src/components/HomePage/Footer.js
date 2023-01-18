import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Grid } from "@mui/material";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  AboutUsCol,
} from "./FooterStyles.js";
import ProductPageIcons from "../Product/ProductIcons";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Container>
          <Row>
            <Grid
              sx={{
                backgroundColor: "inherit",
                paddingTop: 0,
              }}
            >
              <Column>
                <AboutUsCol>
                  <FooterLink href="/aboutus">
                    <Heading style={{ fontSize: "35px", paddingTop: 5 }}>
                      ABOUT US{" "}
                    </Heading>
                  </FooterLink>{" "}
                  <FooterLink style={{ fontSize: "20px", paddingBottom: "5%" }}>
                    An online clothing store containing international brands.
                    Worldwide deliveries are available.
                  </FooterLink>
                </AboutUsCol>
              </Column>
            </Grid>
            <Column>
              {" "}
              <Grid
                container
                spacing={0}
                columns={12}
                marginRight="10%"
                alignItems="center"
                justify="center"
                mt="120px"
              >
                <PhoneIcon
                  sx={{ fontSize: "40px", color: "black", mx: 6 }}
                ></PhoneIcon>

                <EmailIcon
                  sx={{ fontSize: "40px", color: "black" }}
                ></EmailIcon>
              </Grid>
              <ProductPageIcons />
            </Column>
          </Row>

          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              color: "black",
              padding: 10,
            }}
          >
            Clothing Store &copy;2023
          </div>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
