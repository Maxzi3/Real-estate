import React from 'react'
import Hero from '../Components/Hero'
import Section2 from '../Components/Section2';
import Team from '../Components/Team'

const AboutPage = () => {
  return (
    <div>
      <Hero
        Tittle="About Us"
        subTittle="Your trusted partner in finding the perfect property"
        button="Search Now"
      />
      <Section2/>
      <Team/>

    </div>
  );
}

export default AboutPage
