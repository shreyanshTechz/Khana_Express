import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import burger from "../picture/burger.jpg";
import pizza from "../picture/pizza.jpg";
import icecream from "../picture/icecream.jpg";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import burger from "../picture/burger.jpg"
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={pizza}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pizza
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  An Italian dish consisting of a flat round bread base with
                  vegetables, cheese, meat, etc. on top, which is cooked in an
                  oven
                </Typography>
              </CardContent>
              <CardActions>
                {/* <div>
                  <LocalMallSharpIcon />
                  <FavoriteBorderIcon style={{ marginLeft: 250 }} />
                </div> */}
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={icecream}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ice Cream
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ice cream is a sweetened frozen food typically eaten as a
                  snack or dessert. It may be made from milk or cream.
                </Typography>
              </CardContent>
              <CardActions>
                {/* <div>
                  <LocalMallSharpIcon />
                  <FavoriteBorderIcon style={{ marginLeft: 250 }} />
                </div> */}
              </CardActions>
            </Card>
          </Item>
          {/* </Item> */}
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={burger}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Burger
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Meat or vegetables cut into very small pieces and made into a
                  flat round-shaped cutlet, that you eat between two pieces of
                  bread
                </Typography>
              </CardContent>
              <CardActions>
                {/* <div>
                  <LocalMallSharpIcon />
                  <FavoriteBorderIcon style={{ marginLeft: 250 }} />
                </div> */}
              </CardActions>
            </Card>
          </Item>
        </Grid>
        {/* <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}

// const picture = [
//   { id: 1, name: "Pizza", image: "src\components\picture\burger.jpg" },
//   { id: 2, name: "Momos", image: "src\components\picture\momos.jpg" },
//  ]

// export default function SlideFront() {

//   return (

//   );
// }
