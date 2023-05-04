import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Card = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("https://server-shmaruf58.vercel.app/allData")
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);
  console.log(services);

  return (
    <div className="p-3">
      <h1 className="text-center font-bold text-5xl pb-20">
        Our American chef and Their Recepie
      </h1>

      <div className=" container mx-auto grid grid-cols md:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service?.id}
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <LazyLoad offset={300} threshold={0.95}>
                <img
                  className="w-44 h-64"
                  src={service.pictureUrl}
                  alt="Movie"
                />
              </LazyLoad>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p>Year Of Experience: {service.yearsOfExperience}</p>
              <p>Number Of Recepie: {service.numRecipes}</p>
              <p>Likes: {service.likes}</p>
              <div className="card-actions justify-end">
                <Link to={`/services/${service?.id}`}>
                  <button className="btn btn-primary">View Recepies</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
