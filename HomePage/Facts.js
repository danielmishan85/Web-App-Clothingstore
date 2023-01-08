import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import SellIcon from "@mui/icons-material/Sell";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Facts() {
  return (
    <Box sx={{ mx: 10 }} display="flex" flexDirection="row">
      <CardContent sx={{ mx: 10, textAlign: "center" }}>
        <LocalShippingOutlinedIcon
          sx={{ fontSize: 50, mx: 5 }}
        ></LocalShippingOutlinedIcon>
        <Typography variant="h5" component="div">
          Free Shipping
        </Typography>
      </CardContent>
      <CardContent sx={{ mx: 10 }}>
        <FlightTakeoffOutlinedIcon
          sx={{ fontSize: 50, mx: 10 }}
        ></FlightTakeoffOutlinedIcon>
        <Typography variant="h5" component="div">
          Worldwide Shipping
        </Typography>
      </CardContent>
      <CardContent sx={{ mx: 10 }}>
        <LocalOfferOutlinedIcon
          sx={{ fontSize: 50, mx: 5 }}
        ></LocalOfferOutlinedIcon>
        <Typography variant="h5" component="div">
          Top Brands
        </Typography>
      </CardContent>
      <CardContent sx={{ mx: 10, textAlign: "center" }}>
        <SellIcon sx={{ fontSize: 50, mx: 5 }}></SellIcon>
        <Typography variant="h5" component="div">
          Best Prices
        </Typography>
      </CardContent>
    </Box>
  );
}
export default Facts;