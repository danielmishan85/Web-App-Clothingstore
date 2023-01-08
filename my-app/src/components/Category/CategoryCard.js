import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CategoryCard(props) {
  return (
    <Card
      sx={{
        bgcolor: "#eaece5",
        maxWidth: 300,

        ...props.sx,
      }}
    >
      <CardMedia
        component="img"
        height="450"
        width="300"
        image={props.item.img}
        alt={props.item.category}
      />
      <CardContent>
        <Typography component="div" letterSpacing={4} variant="h5">
          {props.item.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
