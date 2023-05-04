/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../assets/blog-1.jpeg";
import img2 from "../assets/blog-2.jpeg";
import img3 from "../assets/blog-3.jpeg";
import about from "../assets/home-img.jpeg";
import Card from "./card";

const Home = () => {
  return (
    <>
      {/* Banner section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            className="w-5/12"
            src="https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669505ftjzw.png"
          />
          <div>
            <h1 className="text-5xl font-bold">
              A Culinary Journey Through Our Restaurant's Master Chef Creations
            </h1>
            <p className="py-6 font-semibold text-gray-600">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Extra Section 1 */}
      <div className="container mx-auto mb-20 pt-24 p-6">
        <div className="grid grid-cols md:grid-cols-2 gap-10">
          <div className="pt-20">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6 font-semibold text-gray-600">
              {" "}
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. exercitationem quasi. In deleniti eaque aut
              repudiandae exercitationem
            </p>
          </div>

          <div>
            <img className="w-full rounded" src={about} alt="" />
          </div>
        </div>
      </div>

      {/* card section */}


      <Card></Card>

     



      {/* Extra Section 2 */}
      <div className="pt-20 container mx-auto  pb-20">
        <h1 className="text-5xl font-bold text-center pb-10">
          Our Best Coffee
        </h1>
        <div className="grid grid-cols md:grid-cols-3  md:ps-10 px-6  gap-4 ">
          <img className="rounded w-full" src={img1} alt="" />
          <img className="rounded w-full" src={img2} alt="" />
          <img className="rounded w-full" src={img3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
