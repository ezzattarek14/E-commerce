// import { Link } from "react-router-dom";
import CollectionSection from "../feature/Home/CollectionSection";
import HeroSection from "../feature/Home/HeroSection";
import ReviewSection from "../feature/Home/ReviewSection";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import CategoriesCard from "../feature/Categories/CategoriesCard";


function Home() {
  const data = [
    { img: img1, price: 200, rating: 4, title: "T-SHIRT WITH TAPE DETAILS" },
    { img: img2, price: 240, rating: 3, title: "SKINNY FIT JEANS" },
    { img: img3, price: 180, rating: 4, title: "CHECKERED SHIRT" },
    { img: img4, price: 130, rating: 5, title: "SLEEVE STRIPED T-SHIRT" },
  ];

  return (
    <div>
      <HeroSection />
      <CollectionSection title={"New Arrivals"} data={data} />
      <CategoriesCard />
      {/* <CollectionSection title={"top selling"} data={data2} /> */}
      <ReviewSection />
    </div>
  );
}

export default Home;
