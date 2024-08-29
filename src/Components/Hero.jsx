import React from 'react'
import { Link } from 'react-router-dom';

const Hero = ({Tittle, subTittle, button}) => {
  return (
    <div>
      <div className="bg-primary text-white w-full h-96 bg-center bg-cover">
        <h1 className="pt-32 pb-4 px-10 md:text-4xl text-xl font-extrabold">
          {Tittle}
        </h1>
        <h2 className="pb-10 px-10 md:text-2xl text-base font-bold">
          {subTittle}
        </h2>
        <Link
          to="/properties"
          className="bg-secondary hover:bg-blue-700 text-white font-bold py-3 px-4 rounded mx-10"
        >
          {button}
        </Link>
      </div>
    </div>
  );
}

export default Hero
