import React from 'react';
import { Link } from 'gatsby';
// import Navbar from '@common/Navbar';


import { QuickFactsSaiga } from '@sections/QuickFacts.js'
import { SaigaAnimation } from '@components/saiga/animation.js' 
import Layout from '@common/Layout';
import { Section, Container } from '@components/global';
import Title from '@sections/Title';

const Saiga = () => (
  <Layout>
    <Section id="saigasection">
      {/* <h2 className="sectionheader">Elephant</h2> */}
      <Title animalname = {"Saiga"}></Title>
      <QuickFactsSaiga />
      <SaigaAnimation />
    </Section>
  </Layout>
);

export default Saiga;
