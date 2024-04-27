import { Avatar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import logo from "../images/logo.svg";
// import cartIcn from "../images/icon-cart.svg";
import plcHolderAvatar from "../images/image-avatar.png";
import Cart from "./Cart";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
  return (
    <Box>
      <Toolbar>
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            borderBottom: "1px solid hsl(220, 14%, 75%)",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} gap={1} >

            <MenuDrawer />

            <img
              src={logo}
              alt="logo"
              style={{ height: "15px", marginBottom: "2px" }}
            />

            <Stack
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                gap: "1.5rem",
                ml: "3rem",
              }}
            >
              {["Collections", "Men", "Women", "About", "Contact"].map(
                (item, index) => (
                  <Button
                    key={index}
                    sx={{
                      height: "64px",
                      minWidth: "0",
                      borderRadius: "0",
                      textTransform: "capitalize",
                      color: "hsl(220, 14%, 75%)",
                      fontWeight: "500",
                      fontSize: ".75rem",
                      pt: 1.7,
                      px: 0,
                      borderBottom: "solid 3px transparent",

                      "&:hover": {
                        bgcolor: "transparent",
                        color: " hsl(219, 9%, 45%)",
                        borderBottom: "solid 3px hsl(26, 100%, 55%)",
                      },
                    }}
                  >
                    {item}
                  </Button>
                )
              )}
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            gap={3}
            sx={{ alignItems: "center", minHeight: "64px" }}
          >
            <Cart />

            <Avatar
              alt="avatar"
              src={plcHolderAvatar}
              sx={{
                height: { xs: "1.75rem", md: "2rem" },
                width: { xs: "1.75rem", md: "2rem" },
                cursor: "pointer",
                border: "1.7px solid transparent",
                transition: ".3s ease-in-out",

                "&:hover": { border: "1.7px solid hsl(26, 100%, 55%)" },
              }}
            />
          </Stack>
        </Stack>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
