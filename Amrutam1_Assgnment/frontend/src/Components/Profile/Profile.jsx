import React from "react";
import Frame from "../Assets/Frame 29.png";
import DP from "../Assets/profile.png";
import Tick from '../Assets/tick.png';
import Rating from '../Assets/rating.png';

export const Profile = () => {
  return (
    <div className="row mt-6 px-16 rounded-lg">
      <img src={Frame} alt="profile section" className="" />
      {/* Profile Details */}
      <div className="flex flex-col  flex-grow border-gray-700">
        <div className="flex items-center gap-5 ">
          <img src={DP} alt="rounded-img" className="-mt-8 w-24 ml-10" />
          <h3 className="font-bold">
            Dr. Bruce Williams
            <img src={Tick} alt="right-tick" className="inline ml-2" />
            <br />
            <p className="font-thin ">Gynecologist</p>
            <img src={Rating} alt="rating" />
          </h3>
          <div className="flex mt-2 md:ml-12 md:gap-12 lg:ml-44 lg:gap-44">
            <div className="flex gap-12 ">
              <p className="text-green-700">
                Followers
                <br />
                <h1 className="font-bold text-center text-black">820</h1>
              </p>

              <p className="text-green-700">
                Following
                <br />
                <h1 className="font-bold text-center text-black ">18K</h1>
              </p>
              <p className="text-green-700">
                Posts
                <br />
                <h1 className="font-bold text-center text-black ">54</h1>
              </p>
            </div>

            {/* Book Appointment Button */}
            <button className="border text-white rounded-md px-4 py-2  bg-green-700">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
