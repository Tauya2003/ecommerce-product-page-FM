import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import sneakerImage from "../images/image-product-1.jpg";
import previousIcn from "../images/icon-previous.svg";
import nextIcn from "../images/icon-next.svg";
import minusIcn from "../images/icon-minus.svg";
import plusIcn from "../images/icon-plus.svg";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import { ShoppingCart } from "@mui/icons-material";
import { useState } from "react";

const ProductPage = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        px: { md: "4rem" },
        py: { md: "5rem" },
        gap: { md: "4rem" },
        maxWidth: { md: 1000 },
        mx: { md: "auto" },
        alignItems: { md: "center" },
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            borderRadius: { md: "1rem" },
            overflow: "hidden",
            height: { md: "350px" },
            width: { md: "350px" },
          }}
        >
          <img src={sneakerImage} alt="sneaker" style={{ width: "100%" }} />
        </Box>

        <IconButton
          sx={{
            position: "absolute",
            display: { md: "none" },
            top: "calc(50% - 1rem)",
            left: "1rem",
            backgroundColor: "white",
            borderRadius: "50%",
            height: "2.5rem",
            width: "2.5rem",

            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <img src={previousIcn} alt="previous" style={{ height: "50%" }} />
        </IconButton>

        <IconButton
          sx={{
            position: "absolute",
            display: { md: "none" },
            top: "calc(50% - 1rem)",
            right: "1rem",
            backgroundColor: "white",
            borderRadius: "50%",
            height: "2.5rem",
            width: "2.5rem",

            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <img src={nextIcn} alt="next" style={{ height: "50%" }} />
        </IconButton>

        <Stack
          direction={"row"}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            mt: "2rem",
          }}
        >
          {[thumbnail1, thumbnail2, thumbnail3, thumbnail4].map(
            (thumbnail, idx) => (
              <Box
                key={idx}
                sx={{
                  height: "75px",
                  width: "75px",
                  borderRadius: ".5rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "2px solid transparent",
                  transition: "0.3s linear",
                  position: 'relative',

                  /* Tint effect on hover */
                  '&:hover .MuiBox-root > img': {
                    opacity: 0.5, // Adjust opacity for desired tint strength
                    transition: 'opacity 0.2s ease-in-out', // Optional transition for smoother effect
                  },


                  "&:hover": {
                    border: "2px solid hsl(26, 100%, 55%)",
                  },
                }}
              >
                <Box
                  sx={{ // Inner Box for tint (invisible by default)
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', // White tint with opacity
                    opacity: 0,
                  }}
                />
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            )
          )}
        </Stack>
      </Box>

      <Box sx={{ padding: "1rem", paddingBottom: "2rem" }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "0.7rem",
            fontWeight: "bold",
            letterSpacing: "0.1rem",
            color: "hsl(26, 100%, 55%)",
            marginBottom: "1rem",
          }}
        >
          Sneaker Company
        </Typography>

        <Typography
          sx={{
            fontSize: "1.6rem",
            lineHeight: "2rem",
            fontWeight: 700,
            color: "hsl(220, 13%, 13%)",
          }}
        >
          Fall Limited Edition Sneakers
        </Typography>

        <Typography sx={{ color: "hsl(219, 9%, 45%)", marginTop: "1rem" }}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Typography>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={{ xs: "space-between", md: "normal" }}
          sx={{
            marginTop: "1.5rem",
            flexWrap: "wrap",
            maxWidth: { md: 300 },
          }}
        >
          <Typography
            sx={{
              color: "hsl(220, 13%, 13%)",
              fontSize: "1.6rem",
              fontWeight: 700,
              mr: { md: "6rem" },
            }}
          >
            $125.00
          </Typography>

          <Box
            sx={{
              bgcolor: "hsl(25, 100%, 94%)",
              width: "3rem",
              borderRadius: "0.4rem",
              display: "grid",
              placeContent: "center",
              marginLeft: "-5rem",
              mr: { md: "6rem" },
            }}
          >
            <Typography sx={{ color: " hsl(26, 100%, 55%)", fontWeight: 700 }}>
              50%
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                color: " hsl(220, 14%, 75%)",
                textDecoration: "line-through",
                fontWeight: 700,
              }}
            >
              $250.00
            </Typography>
          </Box>
        </Stack>

        <Stack direction={{ md: "row" }} gap={{ md: 2 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              minWidth: { md: 150 },
              bgcolor: "hsl(223, 64%, 98%)",
              mt: "1.5rem",
              height: "3rem",
              px: "1rem",
              borderRadius: ".7rem",
            }}
          >
            <IconButton onClick={handleDecrement}>
              <img src={minusIcn} alt="minus" />
            </IconButton>

            <Typography sx={{ color: "hsl(220, 13%, 13%)", fontWeight: 700 }}>
              {count}
            </Typography>

            <IconButton onClick={handleIncrement}>
              <img src={plusIcn} alt="plus" />
            </IconButton>
          </Stack>

          <Button
            startIcon={<ShoppingCart sx={{ color: "white" }} />}
            sx={{
              height: "3rem",
              width: "100%",
              bgcolor: "hsl(26, 100%, 55%)",
              mt: "1.5rem",
              color: "white",
              fontWeight: 600,
              borderRadius: ".5rem",
              textTransform: "initial",

              "&:hover": {
                bgcolor: "hsl(26, 100%, 65%)",
                boxShadow: "0px 2.5rem 2.5rem -1rem hsl(26, 100%, 75%)",
              },
            }}
          >
            Add to cart
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductPage;
