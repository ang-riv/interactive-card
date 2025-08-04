import { useState } from "react";
import mobile from "../src/assets/images/bg-main-mobile.png";
import cardBack from "../src/assets/images/bg-card-back.png";
import cardFront from "../src/assets/images/bg-card-front.png";
import cardLogo from "../src/assets/images/card-logo.svg";

function App() {
  const [cvcNum, setCVC] = useState("000");
  const [cardNum, setNum] = useState("0000 0000 0000 0000");
  const [cardName, setName] = useState("JANE APPLESEED");
  const [expDate, setDate] = useState("00/00");
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full border border-green-500 ">
        <div className="w-full h-6/10">
          <div
            style={{ backgroundImage: `url(${cardBack})` }}
            className="absolute w-[300px] top-10 right-5 h-44 bg-center bg-cover rounded-lg"
          >
            <div className="w-2/10 relative top-18 h-7 left-55 flex items-end justify-end pr-2 text-white tracking-widest">
              <p>{cvcNum}</p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cardFront})` }}
            className="absolute w-[300px] top-40 left-5 h-44 bg-center bg-cover rounded-lg p-5"
          >
            <div className="h-6/10 w-full">
              <img src={cardLogo} alt="" className="h-[35px]" />
            </div>
            <div className="w-full h-4/10 flex flex-col justify-between text-white tracking-widest">
              <p className="w-full text-xl">{cardNum}</p>
              <div className="flex justify-between">
                <p className="text-xs">{cardName}</p>
                <p className="text-xs">{expDate}</p>
              </div>
            </div>
          </div>
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

          <div className="w-full flex gap-2">
            <div className="w-1/2">
              <label htmlFor="month">EXP. DATE(MM/YY)</label>
              <label htmlFor="year" className="sr-only">
                Year Expiry Date
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className="w-1/2 border border-purple-500 rounded-lg h-12 px-2"
                  id="month"
                  placeholder="MM"
                />
                <input
                  type="number"
                  className="w-1/2 border border-purple-500 rounded-lg h-12 px-2"
                  id="year"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="cvc">CVC</label>
              <input
                type="number"
                id="cvc"
                className="w-full border border-purple-500 rounded-lg h-12 px-2"
                placeholder="e.g. 123"
              />
            </div>
          </div>
          <button className="w-full bg-purple-300 rounded-lg py-4 font-bold text-xl">
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
