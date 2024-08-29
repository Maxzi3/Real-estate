import React from 'react'
import Hero from '../Components/Hero'
import Section2 from '../Components/Section2';

const AboutPage = () => {
  return (
    <div>
      <Hero
        Tittle="About Us"
        subTittle="Your trusted partner in finding the perfect property"
        button="Search Now"
      />
      <Section2/>

    </div>
  );
}

export default AboutPage
