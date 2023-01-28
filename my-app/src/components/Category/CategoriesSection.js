import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

export default function CategorySection() {
  var items = [
    {
      img: "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7c4b06d3/images/large/850171750_P_1.png?sw=298&sh=447",
      category: "ISABELMARANT",
      title: "ISABEL MARANT",
    },
    {
      img: "https://www.factory54.co.il/on/demandware.static/-/Sites-master-catalog/default/dwca1160be/images/large/550046402_P_1.png",
      category: "LEVIS",
      title: "LEVIS",
    },
    {
      img: "https://www.factory54.co.il/on/demandware.static/-/Sites-master-catalog/default/dw56d72b91/images/large/882302637_P_1.png",
      category: "BURBERRY",
      title: "BURBERRY",
    },
    {
      img: "https://www.factory54.co.il/on/demandware.static/-/Sites-master-catalog/default/dwca26d5e4/images/large/991210806_P_1.png",
      category: "TOMMYHILFIGER",
      title: "TOMMY HILFIGER",
    },
  ];
  return (
    <section>
      <Grid
        columns={24}
        sx={{
          flexGrow: 2,
          textAlign: "center",
          marginBottom: 5,
        }}
        container
      >
        {items.map((item, i) => (
          <Grid
            key={i}
            item
            xs={24}
            md={6}
            justifyContent="center"
            sx={{ alignContent: "center", padding: "20px" }}
          >
            <Link
              style={{
                textDecoration: "none",
              }}
              to={`/${item.category}`}
            >
              <CategoryCard sx={{ margin: "auto" }} key={i} item={item} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
