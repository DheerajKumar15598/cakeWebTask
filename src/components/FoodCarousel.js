import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cardsdata from "./CardsData";

const FoodCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };  


  return (
    <>
      <Carousel showDots={true} responsive={responsive}>
        {Cardsdata.map((item, index) => {
          return (
            <div key={index} className="card rounded-xl bg-white text-black">
              <img
                className="product--image rounded-t-xl"
                src={item.img}
                alt="product image"
              />
              <h2 className="font-bold text-4xl py-2">{item.name}</h2>
              <p className="text-2xl">Rs.{item.price}</p>
              <p className="text-sm">{item.time}</p>
              <p className="text-sm">{item.rate}</p>
              <p>
                <button className="rounded-b-xl bg-white">Add to Cart</button>
              </p>
            </div>
          );
        })}
      </Carousel>
      </>
  );
};

export default FoodCarousel;