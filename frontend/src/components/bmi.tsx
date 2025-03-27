"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

export default function Bmi() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);
  const [message, setMessage] = useState<string>(" ");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    if (weight <= 0 || height <= 0) {
      alert("Please enter a valid weight and height");
      return;
    }

    const calculatedBmi = Number(
      (weight / ((height * height) / 10000)).toFixed(2)
    );
    setBmi(calculatedBmi);

    // Logic for message
    if (calculatedBmi < 20) {
      setMessage("Underweight");
    } else if (calculatedBmi >= 20 && calculatedBmi < 27) {
      setMessage("Normal");
    } else {
      setMessage("Overweight");
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "weight") {
      setWeight(Number(value));
    } else if (name === "height") {
      setHeight(Number(value));
    }
  };

  return (
    <div className="flex items-center justify-center text-center border-2 border-red-600 focus:outline-none focus:ring-2 p-5 bg-black w-3/4">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl text-red-600 font-bold">
          Let&apos;s calculate your <span className="text-red-600">BMI</span>
        </h1>
        <p className="text-lg text-red-600">
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <div className="flex-wrap gap-[50px] flex justify-evenly text-red-600">
            <input
              type="number"
              placeholder="Weight /kg"
              className="p-3 border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
              name="weight"
              onChange={changeHandler}
              value={weight || ""}
              required
            />

            <input
              type="number"
              placeholder="Height /cm"
              className="p-3 border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
              name="height"
              onChange={changeHandler}
              value={height || ""}
              required
            />
          </div>
          <div className="flex-wrap flex text-red-600 justify-evenly">
            <p>
              Your BMI is:{" "}
              <span className="text-red-600 font-bold">
                {bmi > 0 ? bmi.toFixed(2) : " "}
              </span>
            </p>
            <p>
              Your weight is:{" "}
              <span className="text-red-600 font-bold">
                {message !== " " ? message : " "}
              </span>
            </p>
          </div>
          <div>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 p-3 border-2 border-red-600 bg-black text-red-600 hover:bg-gray-800 transition-colors duration-300"
              >
                Calculate BMI
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}