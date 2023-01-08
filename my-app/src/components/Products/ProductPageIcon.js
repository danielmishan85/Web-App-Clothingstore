import * as React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import { Grid, Typography } from "@mui/material";

export default function ProductPageIcons() {
  return (
    <Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ color: "black" }}
      >
        <LocalShippingOutlinedIcon />
        <Typography sx={{ ml: 2 }}>Free Shipping Worldwide</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ color: "black", mt: 1 }}
      >
        <KeyboardReturnOutlinedIcon />
        <Typography sx={{ ml: 2 }}>Free Extended 60 Day Returns</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ color: "black", mt: 1 }}
      >
        <GppGoodOutlinedIcon />
        <Typography sx={{ ml: 2 }}>2 Year Warranty</Typography>
      </Grid>
    </Grid>
  );
}