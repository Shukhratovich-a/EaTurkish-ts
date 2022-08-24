import Popular1 from "../Assets/Images/Popular/Image1.png";
import Popular2 from "../Assets/Images/Popular/Image2.png";
import Popular3 from "../Assets/Images/Popular/Image3.png";
import Popular4 from "../Assets/Images/Popular/Image4.png";

interface Product {
  id: number;
  image: string;
  title: string;
  rating: number;
  price: number;
}

const PopularProducts: Product[] = [
  {
    id: 1,
    image: Popular1,
    title: "Barbecue Shish kebab Shashlik Skewer",
    rating: 5,
    price: 12.0,
  },
  {
    id: 2,
    image: Popular2,
    title: "Barbecue Shish kebab Shashlik Skewer",
    rating: 4,
    price: 12.0,
  },
  {
    id: 3,
    image: Popular3,
    title: "Barbecue Shish kebab Shashlik Skewer",
    rating: 4,
    price: 12.0,
  },
  {
    id: 4,
    image: Popular4,
    title: "Barbecue Shish kebab Shashlik Skewer",
    rating: 3,
    price: 12.0,
  },
  {
    id: 5,
    image: Popular3,
    title: "Barbecue Shish kebab Shashlik Skewer",
    rating: 3,
    price: 12.0,
  },
  {
    id: 6,
    image: Popular4,
    title: "Barbecue Shish kebab Shashlik Skewer",
    rating: 3,
    price: 12.0,
  },
];

export default PopularProducts;
