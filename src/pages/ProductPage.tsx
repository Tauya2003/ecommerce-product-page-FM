import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import previousIcn from "../images/icon-previous.svg";
import nextIcn from "../images/icon-next.svg";
import minusIcn from "../images/icon-minus.svg";
import plusIcn from "../images/icon-plus.svg";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import { ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import BasicModal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { incrementItem, decrementItem } from "../features/cart/cartSlice";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  images: { image: string; thumbnail: string }[];
}

const ProductPage = () => {
  const { items } = useSelector((state: any) => state.cart);
  const products: Product[] = useSelector((state: any) => state.products.products);

  const dispatch = useDispatch();

  const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnail1);
  const [selectedImage, setSelectedImage] = useState(products[0]?.images[0].image);

  const handleIncrement = () => {
    dispatch(incrementItem(items[0]?.id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(items[0]?.id));
  };

  const handleNext = () => {
    for (let i = 0; i < products[0]?.images.length; i++) {
      if (products[0]?.images[i].image === selectedImage) {
        setSelectedImage(products[0]?.images[i + 1]?.image ?? products[0]?.images[0].image);
        setSelectedThumbnail(products[0]?.images[i + 1]?.thumbnail ?? products[0]?.images[0].thumbnail);
        break;
      }
    }
  }

  const handlePrevious = () => {
    for (let i = 0; i < products[0]?.images.length; i++) {
      if (products[0]?.images[i].image === selectedImage) {
        setSelectedImage(products[0]?.images[i - 1]?.image ?? products[0]?.images[products[0]?.images.length - 1].image);
        setSelectedThumbnail(products[0]?.images[i - 1]?.thumbnail ?? products[0]?.images[products[0]?.images.length - 1].thumbnail);
        break;
      }
    }
  }

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
        <BasicModal img={selectedImage} />

        <IconButton
          onClick={handlePrevious}
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
          onClick={handleNext}
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
          {products[0]?.images.map(
            (image, idx) => (
              <Box
                onClick={() => {
                  setSelectedImage(image.image),
                    setSelectedThumbnail(image.thumbnail)
                }}
                key={idx}
                sx={{
                  height: "75px",
                  width: "75px",
                  borderRadius: ".5rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "2px solid",
                  borderColor:
                    image.thumbnail === selectedThumbnail
                      ? "hsl(26, 100%, 55%)"
                      : "transparent",
                  transition: "0.3s linear",
                  position: 'relative',

                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: image.thumbnail === selectedThumbnail ? '#fffa' : 'transparent',
                    transition: '0.3s linear',

                    "&:hover": {
                      backgroundColor: image?.thumbnail !== selectedThumbnail ? '#fff7' : '#fffa',
                    }


                  }}
                />
                <img
                  src={image.thumbnail}
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
          {products[0]?.name ?? ""}
        </Typography>

        <Typography sx={{ color: "hsl(219, 9%, 45%)", marginTop: "1rem" }}>
          {products[0]?.description ?? ""}
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
            {`$${((products[0]?.price ?? 0) * ((products[0]?.discount ?? 0) / 100)).toFixed(2)}`}
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
              {products[0]?.discount ?? 0}%
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
              ${(products[0]?.price ?? 0).toFixed(2)}
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
              {items[0]?.quantity ?? 0}
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
