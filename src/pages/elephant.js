import React from 'react';
import { Link } from 'gatsby';
import Navbar from '@common/Navbar';


import QuickFactsElephant from '@sections/QuickFacts.js'
import Layout from '@common/Layout';
import { Section, Container } from '@components/global';

const Elephant = () => (
  <Layout>
    <Navbar />
    <Section id="elephantsection">
      <h1>Elephant</h1>
      <QuickFactsElephant />
    </Section>
  </Layout>
);

export default Elephant;
