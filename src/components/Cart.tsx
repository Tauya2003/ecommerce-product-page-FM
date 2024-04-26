import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import cartIcn from "../images/icon-cart.svg";
import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import trashIcn from "../images/icon-delete.svg";

// const options = [];

// const ITEM_HEIGHT = 48;

export default function Cart() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton> */}

      <IconButton
        sx={{ height: "1.7rem", width: "1.7rem", mt: { md: 0.4 } }}
        onClick={handleClick}
      >
        <img src={cartIcn} alt="cart" style={{ height: "130%" }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            // maxHeight: ITEM_HEIGHT * 4.5,
            height: "14rem",
            width: "22rem",
            display: "flex",
            flexDirection: "column",
            borderRadius: ".75rem",

            
          },
        }}
      >
        {/* {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))} */}

        <Toolbar
          sx={{
            borderBottom: "solid 1px  hsl(220, 14%, 75%)",
            minHeight: 45,
            position: "sticky",
          }}
        >
          <Typography
            sx={{ color: "hsl(220, 13%, 13%)", fontWeight: 600, mb: 1 }}
          >
            Cart
          </Typography>
        </Toolbar>

        <Box
          sx={{
            flex: 1,
            p: "18px",
          }}
        >
          <Stack direction={"row"} gap={1}>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                overflow: "hidden",
                borderRadius: ".5rem",
              }}
            >
              <img
                src={thumbnail}
                alt="product"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>

            <Stack direction={"column"}>
              <Typography>Fall Limited Edition Sneakers</Typography>
              <Typography>
                $128.00 &times;3{" "}
                <Box component={"span"} sx={{ fontWeight: 700 }}>
                  $375.00
                </Box>
              </Typography>
            </Stack>

            <IconButton sx={{ borderRadius: "50%" }}>
              <img src={trashIcn} alt="trash" />
            </IconButton>
          </Stack>

          <Button
            sx={{
              bgcolor: "hsl(26, 100%, 55%)",
              width: "100%",
              height: "50px",
              mt: "1.5rem",
              textTransform: "capitalize",
              color: "hsl(0, 0%, 100%)",

              "&:hover": {
                bgcolor: '"hsl(26, 100%, 55%)"',
              },
            }}
          >
            Checkout
          </Button>
          {/* <Typography sx={{ fontWeight: 500, color: "hsl(219, 9%, 45%)" }}>
            Your cart is empty.
          </Typography> */}
        </Box>
      </Menu>
    </div>
  );
}
