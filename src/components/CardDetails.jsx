import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardDetails = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://server-shmaruf58.vercel.app/allData/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const notify = (event) => {
    event.currentTarget.disabled = true;
    toast("Recepie Added to your Favourite List");
  };

  return (
    <>
      {/* Banner section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="w-96 rounded-2xl" src={details.pictureUrl} />
          <div>
            <h1 className="text-5xl font-bold">{details.name}</h1>
            <p className="py-6 font-semibold text-gray-600">{details.bio}</p>
            <p className="py-1 font-semibold text-gray-600">
              Year Of Experience: {details.yearsOfExperience}
            </p>
            <p className="py-1 font-semibold text-gray-600">
              Number of Recepie: {details.numRecipes}
            </p>
            <p className="pb-4 pt-1 font-semibold text-gray-600">
              Likes: {details.likes}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* chef recepie */}

      <div>
        <h1 className="text-center font-bold text-4xl pb-10 pt-10">
          Some Recepies of {details.name}
        </h1>

        <div className=" container mx-auto grid grid-cols md:grid-cols-3 gap-4 pb-10">
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">{details.title1}</h2>
              <p>Ingredients: {details.ing1}</p>
              <p>Method: {details.meth1}</p>
              <p>Rating: {details.rating1}</p>
              <div className="card-actions justify-end">
                <button className="btn" onClick={notify}>
                  Favourite
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">{details.title2}</h2>
              <p>Ingredients: {details.ing2}</p>
              <p>Method: {details.meth2}</p>
              <p>Rating: {details.rating2}</p>
              <div className="card-actions justify-end">
                <button className="btn" onClick={notify}>
                  Favourite
                </button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">{details.title3}</h2>
              <p>Ingredients: {details.ing3}</p>
              <p>Method: {details.meth3}</p>
              <p>Rating: {details.rating3}</p>
              <div className="card-actions justify-end">
                <button className="btn" onClick={notify}>
                  Favourite
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
