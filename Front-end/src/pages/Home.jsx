// import { Link } from "react-router-dom";
import CollectionSection from "../feature/Home/CollectionSection";
import HeroSection from "../feature/Home/HeroSection";
import ReviewSection from "../feature/Home/ReviewSection";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import img5 from "../Assets/img5.png";
import img6 from "../Assets/img6.png";
import img7 from "../Assets/img7.png";
import img8 from "../Assets/img8.png";

function Home() {
  const data = [
    { img: img1, price: 200, rating: 4, title: "T-SHIRT WITH TAPE DETAILS" },
    { img: img2, price: 240, rating: 3, title: "SKINNY FIT JEANS" },
    { img: img3, price: 180, rating: 4, title: "CHECKERED SHIRT" },
    { img: img4, price: 130, rating: 5, title: "SLEEVE STRIPED T-SHIRT" },
  ];
  const data2 = [
    { img: img5, price: 200, rating: 4, title: "VERTICAL STRIPED SHIRT" },
    { img: img6, price: 240, rating: 3, title: "COURAGE GRAPHIC T-SHIRT" },
    { img: img7, price: 180, rating: 2, title: "LOOSE FIT BERMUDA SHORTS" },
    { img: img8, price: 130, rating: 5, title: "FADED SKINNY JEANS" },
  ];

  return (
    <div>
      <HeroSection />
      <CollectionSection title={"New Arrivals"} data={data} />
      <CollectionSection title={"top selling"} data={data2} />
      <ReviewSection />
    </div>
  );
}

export default Home;
