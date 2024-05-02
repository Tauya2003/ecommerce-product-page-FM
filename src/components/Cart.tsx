import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import cartIcn from "../images/icon-cart.svg";
import { Badge, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import trashIcn from "../images/icon-delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();

  const { totalItems, items } = useSelector((store: any) => store.cart);

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
      <Badge badgeContent={totalItems}
        max={9}
        sx={{
          "& .MuiBadge-badge": {
            bgcolor: "hsl(26, 100%, 55%)",
            color: "hsl(0, 0%, 100%)",
            height: ".9rem",
            width: "1rem",
            mt: 1,
            fontSize: ".7rem",
          }
        }}>
        <IconButton
          sx={{ height: "1.7rem", width: "1.7rem", mt: { md: 0.4 } }}
          onClick={handleClick}
        >
          <img src={cartIcn} alt="cart" style={{ height: "130%" }} />
        </IconButton>
      </Badge>

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
            height: "auto",
            width: "22rem",
            display: "flex",
            flexDirection: "column",
            borderRadius: ".75rem",
          },
        }}
      >

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
          {totalItems > 0 ? (
            <>
              <Stack direction={"row"} gap={1} alignItems={'center'} justifyContent={'space-between'}>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    overflow: "hidden",
                    borderRadius: ".5rem",
                  }}
                >
                  <img
                    src={items[0]?.thumbnail}
                    alt="product"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>

                <Stack direction={"column"} >
                  <Typography sx={{ fontSize: { md: '0.9rem' }, color: "hsl(219, 9%, 45%)" }}>Fall Limited Edition Sneakers</Typography>
                  <Typography sx={{ fontSize: { md: '0.9rem' }, color: "hsl(219, 9%, 45%)" }}>
                    ${items[0].price} &times;{items[0].quantity}{" "}
                    <Box component={"span"} sx={{ fontWeight: 700, color: 'hsl(220, 13%, 13%)' }}>
                      ${items[0].price * items[0].quantity}
                    </Box>
                  </Typography>
                </Stack>

                <IconButton sx={{ borderRadius: "50%" }} onClick={() => { dispatch(removeItem(items[0].id)) }}>
                  <img src={trashIcn} alt="trash" />
                </IconButton>
              </Stack>

              <Button
                sx={{
                  bgcolor: "hsl(26, 100%, 55%)",
                  width: "100%",
                  height: { xs: "50px", md: '45px' },
                  mt: "1.5rem",
                  textTransform: "capitalize",
                  color: "hsl(0, 0%, 100%)",
                  borderRadius: '10px',

                  "&:hover": {
                    bgcolor: "hsl(26, 100%, 55%)",
                  },
                }}
              >
                Checkout
              </Button>
            </>
          ) : (<Box sx={{ height: 150, display: 'grid', alignContent: 'center' }}>
            <Typography sx={{ fontWeight: 500, color: "hsl(219, 9%, 45%)", textAlign: 'center'}}>
              Your cart is empty.
            </Typography>
          </Box>)}
        </Box>
      </Menu>
    </div>
  );
}
