import React from "react";
import Header from "../Header/Header";
import Find from "../Assets/find.png";
import Price from '../Assets/Price.png';
import Card from '../Assets/card.png';

export const Doctors = () => {
  return (
    <div className="conatiner">
      <Header />
      <img src={Find} alt="find" />
      <div className="row flex justify-center gap-24 p-4">
        <div className="dropdown">
          <select className="border p-2 rounded">
            <option value="">Expertise</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="border p-2 rounded">
            <option value="option1">Gender</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="border p-2 rounded">
            <option value="option1">Fees</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="border p-2 rounded">
            <option value="option1">Language</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="border p-2 rounded bg-green-300">
            <option value="option1">All Option</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
      <div className="row ml-96 mt-6">
      <img src={Price} alt="" />
      </div>
      <div className="row flex ml-20 mt-12">
        <img src={Card} alt="cards" />
        <img src={Card} alt="cards" />
        <img src={Card} alt="cards" />
      </div>
    </div>
  );
};
