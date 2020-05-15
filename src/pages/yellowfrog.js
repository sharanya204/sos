import React from 'react';
import { Link } from 'gatsby';
// import Navbar from '@common/Navbar';

import Title from '@sections/Title';

import { QuickFactsYellowFrog } from '@sections/QuickFacts.js'
import Layout from '@common/Layout';
import { Section, Container } from '@components/global';
import Frog1 from '@components/frog/Frog1';
import BackHome from '@sections/BackHome';



const YellowFrog = () => (
  <Layout>
    <BackHome />
    <Section id="yellowfrogsection">
    <Title animalname={"Driver: Policy   //   Yellow-Legged Frog"}></Title>
      {/* <h2 className="sectionheader">Elephant</h2> */}
      <QuickFactsYellowFrog />
      <Frog1 />
    </Section>
  </Layout>
);

export default YellowFrog;
