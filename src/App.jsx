import { useState } from "react";
import mobile from "../src/assets/images/bg-main-mobile.png";
import cardBack from "../src/assets/images/bg-card-back.png";
import cardFront from "../src/assets/images/bg-card-front.png";

function App() {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full border border-green-500 ">
        <div className="w-full h-6/10">
          <img
            src={cardBack}
            className="absolute w-8/10 max-w-[300px] top-10 right-5 h-44"
            alt=""
          />
          <img
            src={cardFront}
            className="absolute w-8/10 max-w-[300px] top-40 left-5 h-44"
            alt=""
          />
          <img src={mobile} alt="" className="w-full h-full" />
        </div>
        <main className="w-full h-full px-5 pt-28 flex flex-col justify-around">
          <div>
            <label htmlFor="name" className="w-full">
              CARDHOLDER NAME
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-purple-500 rounded-lg h-12 px-2"
              placeholder="e.g. Jane Appleseed"
            />
          </div>
          <div>
            <label htmlFor="number" className="w-full">
              CARD NUMBER
            </label>
            <input
              type="number"
              id="number"
              className="w-full border border-purple-500 rounded-lg h-12 px-2"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </div>

          <div className="w-full">
            <div className="w-full flex">
              <label htmlFor="" className="w-1/2">
                EXP.DATE(MM/YY)
              </label>
              <label htmlFor="cvc" className="w-1/2">
                CVC
              </label>
            </div>
            <div className="w-full flex">
              <input
                type="number"
                id="month"
                placeholder="MM"
                className="w-1/4 border border-purple-500 rounded-lg h-12 px-2"
              />
              <input
                type="number"
                id="year"
                placeholder="YY"
                className="w-1/4 border border-purple-500 rounded-lg h-12 px-2"
              />
              <input
                type="number"
                id="cvc"
                placeholder="e.g. 123"
                className="w-2/4 border border-purple-500 rounded-lg h-12 px-2"
              />
            </div>
          </div>
          <button className="w-full bg-purple-300 rounded-lg py-4.5">
            Confirm
          </button>
        </main>
        <footer className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Angela Rivera</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
