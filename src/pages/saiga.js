import React from 'react';
import { Link } from 'gatsby';
// import Navbar from '@common/Navbar';


import { QuickFactsSaiga } from '@sections/QuickFacts.js'
import Layout from '@common/Layout';
import { Section, Container } from '@components/global';

const Saiga = () => (
  <Layout>
    <Section id="saigasection">
      {/* <h2 className="sectionheader">Elephant</h2> */}
      <QuickFactsSaiga />
    </Section>
  </Layout>
);

export default Saiga;
