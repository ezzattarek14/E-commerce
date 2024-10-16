// import { Link } from "react-router-dom";
import CollectionSection from "../feature/Home/CollectionSection";
import HeroSection from "../feature/Home/HeroSection";
import ReviewSection from "../feature/Home/ReviewSection";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import CategoriesCard from "../feature/Categories/CategoriesCard";
import { useProducts } from "../feature/Products/useProducts";

function Home() {
  const data = [
    { image: img1, price: 200, name: "T-SHIRT WITH TAPE DETAILS" },
    { image: img2, price: 240, name: "SKINNY FIT JEANS" },
    { image: img3, price: 180, name: "CHECKERED SHIRT" },
    { image: img4, price: 130, name: "SLEEVE STRIPED T-SHIRT" },
  ];
  const { Products } = useProducts();
  const testData = Products?.filter((item) => item.bestseller === true);
  let BestSellerData = data;

  if (testData?.length === 0) {
    BestSellerData = data;
  } else {
    BestSellerData = testData?.slice(0, 4);
  }

  return (
    <div>
      <HeroSection />
      <CollectionSection title={"Best Seller"} data={BestSellerData} />
      <CategoriesCard />
      {/* <CollectionSection title={"top selling"} data={data2} /> */}
      <ReviewSection />
    </div>
  );
}

export default Home;
