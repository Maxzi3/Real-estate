import React from 'react'
import Hero from '../Components/Hero'
import Section1 from '../Components/Section1'

const HomePage = () => {
  return (
    <div>
      <Hero
        Tittle={"Find Your Dream Home Today"}
        subTittle={"Browse thousands of listings in the best neighborhoods"}
        button={"Search Now"}
      />
      <Section1 />
    </div>
  );
}

export default HomePage
