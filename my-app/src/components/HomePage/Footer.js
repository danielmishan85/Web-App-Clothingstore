import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GppGoodIcon from "@mui/icons-material/GppGood";
import PhoneIcon from "@mui/icons-material/Phone";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SellIcon from "@mui/icons-material/Sell";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  AboutUsCol,
  ColIcon,
} from "./FooterStyles.js";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Container>
          <Row>
            <Column>
              <AboutUsCol>
                <FooterLink href="/aboutus">
                  <Heading style={{ fontSize: "35px" }}>ABOUT US </Heading>
                </FooterLink>{" "}
                <FooterLink style={{ fontSize: "20px" }}>
                  An online clothing store containing international brands.
                  Worldwide deliveries are available.
                </FooterLink>
              </AboutUsCol>
            </Column>

            <Column>
              <ColIcon>
                <FooterLink href="#">
                  <PhoneIcon
                    sx={{ fontSize: "40px", color: "black" }}
                  ></PhoneIcon>
                  Contact Us
                </FooterLink>
                <FooterLink href="#">
                  <EmailIcon
                    sx={{ fontSize: "40px", color: "black" }}
                  ></EmailIcon>
                  Our Mail
                </FooterLink>
              </ColIcon>{" "}
            </Column>
          </Row>

          <Row>
            <Column>
              <FooterLink>
                <FlightTakeoffIcon
                  sx={{ fontSize: "35px", color: "black" }}
                ></FlightTakeoffIcon>
                <Row>FREE SHIPPING ALL ORDERS</Row>
              </FooterLink>
            </Column>

            <Column>
              <FooterLink>
                <FlightTakeoffIcon
                  sx={{
                    fontSize: "35px",
                    color: "black",
                  }}
                ></FlightTakeoffIcon>
                <Row>FREE SHIPPING ALL ORDERS</Row>
              </FooterLink>
            </Column>

            <Column>
              <FooterLink>
                <SellIcon sx={{ fontSize: "35px", color: "black" }}></SellIcon>
                <Row>BEST PRICES</Row>
              </FooterLink>
            </Column>
          </Row>
        </Container>

        <Container>
          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              color: "black",
              background: "white",
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
