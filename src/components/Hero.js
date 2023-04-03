import React, { useEffect, useState } from "react";
import cake1 from "../images/cake1.jpg";
import cake4 from "../images/cake4.jpeg";
import cake6 from "../images/cake6.jpg";

const Hero = () => {
  const [image, setImage] = useState(cake1);
  const [price, setPrice] = useState("Rs 599");
  const [pincode, setPincode] = useState();
  const [selectedOption, setSelectedOption] = useState("");

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="flex w-full">
      <div className="smallCake flex flex-col w-1/4">
        <div className="w-32 h-32 ml-56 mt-10">
          <img
            className="rounded-2xl"
            onClick={() => {
              setImage(cake1);
            }}
            src={cake1}
            alt=""
          />
        </div>
        <div className="w-32 h-32 ml-56 mt-2">
          <img
            className="rounded-2xl w-full h-full"
            onClick={() => {
              setImage(cake4);
            }}
            src={cake4}
            alt=""
          />
        </div>
        <div className="w-32 h-32 ml-56 mt-2">
          <img
            className="rounded-2xl w-full h-full"
            onClick={() => {
              setImage(cake6);
            }}
            src={cake6}
            alt=""
          />
        </div>
      </div>

      <div className="largeCake w-1/4">
        <img className="rounded-2xl h-96 mt-10" src={image} alt="" />
      </div>
      <div className="cakeDetails w-3/6 mt-10 ml-6">
        <h1 className="text-5xl font-bold">Chocolate Truffle</h1>
        <button className="bg-gradient-to-t from-green-700 to-green-600 pr-5 pl-4 py-1 rounded-md text-white mt-2">
          ⭐ 4.92
        </button>
        <span className="text-gray-400 underline ml-3">Reviews 5</span>
        <h1 className="text-3xl font-bold mt-6">{price}</h1>
        <h3 className="text-xl font-bold mt-6">Select Weight</h3>

        <div className="radioButton">
          <form action="">
            <input
              type="radio"
              onClick={() => {
                setPrice("Rs 399");
              }}
              id="halfKg"
              name="fav_language"
              value="0.5 kg"
            />
              <label for="halfKg">0.5 kg</label> {" "}
            <input
              type="radio"
              onClick={() => {
                setPrice("Rs 599");
              }}
              id="fullKg"
              name="fav_language"
              value="CSS"
            />
              <label for="fullKg">1 kg</label> {" "}
            <input
              type="radio"
              onClick={() => {
                setPrice("Rs 999");
              }}
              id="twoKg"
              name="fav_language"
              value="JavaScript"
            />
              <label for="twoKg">2 kg</label>
          </form>
          <span className="pl-5 font-bold">Rs. 399</span>
          <span className="pl-5 font-bold">Rs. 599</span>
          <span className="pl-5 font-bold">Rs. 999</span>
        </div>

        <input
          className="w-60 ml-5 mt-5 py-1 rounded-lg text-center border border-gray-400"
          type="text"
          placeholder="Enter Pincode"
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
        <input
          className="w-60 ml-5 mt-5 py-1 rounded-lg text-center border border-gray-400"
          type="text"
          placeholder="Select Date"
        />
        {pincode && <h1>You are looking for {pincode}</h1>}

        <form className="mt-2" action="">
          <input
            type="radio"
            onClick={() => {
              setPrice("Rs 399");
            }}
            id="halfKg"
            name="fav_language"
            value="0.5 kg"
          />
            <label for="halfKg">Eggless</label> {" "}
          <input
            type="radio"
            onClick={() => {
              setPrice("Rs 599");
            }}
            id="fullKg"
            name="fav_language"
            value="CSS"
          />
            <label for="fullKg">With Egg</label>
          <input
            className="w-60 ml-5 mt-5 py-1 rounded-lg text-center border border-gray-400"
            type="text"
            placeholder="Message on Cake"
          />
        </form>

        <h3 className="text-xl font-bold mt-6">Select Delivery Type</h3>
        <button className="w-32 border border-gray-400 py-3 mx-2 mt-3 rounded-2xl">Standard</button>
        <button className="w-32 border border-gray-400 py-3 mx-2 mt-3 rounded-2xl">Fixed time</button>
        <button className="w-32 border border-gray-400 py-3 mx-2 mt-3 rounded-2xl">Mid Night</button>

        <div className="mt-5">
          <select
            id="my-dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select Option</option>
            <option value="30 minutes">Standard</option>
            <option value="40 minutes">Fixed</option>
            <option value="55 minutes">Mid Night</option>
          </select>
          <p>{selectedOption}</p>
        </div>
        {/* <h1>hintherbh{deliveryTime}</h1> */}
        <button className="w-48 mt-10 ml-3 py-3 px-5 border border-gray-400 rounded-2xl">
          Add to Cart
        </button>
        <button className="w-48 mt-10 ml-3 py-3 px-5 border border-gray-400 rounded-2xl bg-red-900 text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
