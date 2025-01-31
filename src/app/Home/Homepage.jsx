import React from "react";
import Slider from "../slider/page";
import Form from "../components/Form";
export const metadata = {
  title: "Home",
  description: "Trying to learn about Next js  ",
};
export default function Homepage() {
  
  return (
    <div>
      <Slider />
      <Form />
     
    </div>
  );
}
