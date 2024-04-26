import React from "react";
import Social from "../Assets/social_icon.png";
import Currency from "../Assets/currency.png";
import Session from "../Assets/session.png";
import Slot from "../Assets/slot.png";
import Special from "../Assets/social.png";
import Clinic from "../Assets/clinic.png";
import Review from "../Assets/Review.png";

export const About = () => {
  return (
    <div className="flex px-4">
      <div className="row left-side  border-solid border-2 border-gray-300 ml-16 mt-24 rounded-md h-96">
        <div className="col-6 flex mt-5">
          <p className="font-bold ml-4  w-48">A Little About Me</p>
          <button className="w-28 h-9 ml-80 border-2 border-gray-200 rounded-lg">
            Follow +
          </button>
        </div>
        <div className="col-6"></div>
        <p className="h-28 w-auto ml-16 mt-8">
          Hello, I am Dr. Bruce Willis, a Gynecologist at Sanjivni Hospital,
          <br />
          Surat. I love working with all my hospital staff and senior doctors.
          <br /> I completed my graduation in Gynecologist Medicine from...
        </p>
        <hr />
        <p className="text-end underline ">Read more!</p>
        <div className="row flex gap-16 ml-12">
          <h2 className="font-bold">Language Spoken</h2>
          <p>English</p>
          <p>Hindi</p>
          <p>Telugu</p>
        </div>
        <div className="row mt-5 ml-8 ">
          <img src={Social} alt="socia-icon" />
        </div>
        <div className="row left-side  border-solid border-2 border-gray-300  mt-24 rounded-md h-72">
          <div className="col-6 flex mt-5">
            <p className="font-bold ml-4  w-48">I Specialize In</p>
          </div>
          <div className="row mt-5 ml-8 ">
            <img src={Special} alt="socia-icon" />
          </div>
        </div>
        <div className="row left-side  border-solid border-2 border-gray-300  mt-8 rounded-md h-52">
          <div className="col-6 flex mt-5">
            <p className="font-bold ml-4  w-48">The Concern | Treatment</p>
          </div>
          <div className="row mt-10 ml-8 flex flex-wrap gap-14 text-green-900">
            <p>Skin Treatment</p>
            <p>Pregnancy</p>
            <p>Period Doubts</p>
            <p>Pelvic Pain</p>
            <p>Ovarian Cysts</p>
            <button className="rounded-lg border-2 border-gray-300">
              + 5 More
            </button>
          </div>
        </div>
        <div className="row left-side  border-solid border-2 border-gray-300  mt-8 rounded-md h-96">
          <div className="col-6 flex mt-5">
            <p className="font-bold ml-4  w-48">My Work Experience</p>
          </div>
          <div className="row mt-10 ml-8 flex flex-wrap gap-14 text-green-900">
            <p>I HAVE BEEN IN PRACTICE FOR : 7+ YEARS</p>
            <hr className=" border-green-900 w-96" />

            <img src={Clinic} alt="clinic" />
            <img src={Clinic} alt="clinic" />
          </div>
        </div>

        <div className="row left-side  border-solid border-2 border-gray-300  mt-8 rounded-md h-auto">
          <div className="col-6 flex mt-5">
            <p className="font-bold ml-4  w-48">Featured Reviews (102)</p>
          </div>
          <img src={Review} alt="" className="mt-8" />
          <img src={Review} alt="" className="mt-6" />
        </div>
      </div>

      <div className="right-side gap-10 ">
        <div className="row left-side  border-solid border-2 border-gray-300 ml-4 mt-28 rounded-md">
          <div className="col-6 flex mt-5 rounded">
            <p className="font-bold ml-4  w-48">Appointment Fee</p>
            <img
              src={Currency}
              alt="currency"
              className="w-4 h-4 mt-1 ml-80 text-green-700"
            />
            400.00
          </div>
          <h2 className="ml-4 font-bold mt-10 w-72 h-7">
            Select your mode of session
          </h2>
          <img src={Session} alt="session" className="mt-8" />
          <img src={Slot} alt="slot" className="mt-10" />
          <button className="bg-green-900 text-white rounded-md h-12 w-96 ml-32 mb-16 mt-10">
            Make an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};
