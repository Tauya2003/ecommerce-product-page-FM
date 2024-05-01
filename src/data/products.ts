import image1 from "../images/image-product-1.jpg";
import image1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import image2 from "../images/image-product-2.jpg";
import image2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import image3 from "../images/image-product-3.jpg";
import image3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import image4 from "../images/image-product-4.jpg";
import image4Thumbnail from "../images/image-product-4-thumbnail.jpg";

const products = [
  {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 250.0,
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    discount: 50,
    images: [
      {
        id: 1,
        image: image1,
        thumbnail: image1Thumbnail,
      },
      {
        id: 2,
        image: image2,
        thumbnail: image2Thumbnail,
      },
      {
        id: 3,
        image: image3,
        thumbnail: image3Thumbnail,
      },
      {
        id: 4,
        image: image4,
        thumbnail: image4Thumbnail,
      },
    ],
    
  },
];

export default products;
