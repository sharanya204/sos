import React from 'react';
import Ivoryintro from '@components/elephant/Ivoryintro'

import { QuickFactsElephant } from '@sections/QuickFacts.js'
import Layout from '@common/Layout';
import Title from '@sections/Title';
import { Section, Container } from '@components/global';
import { IvorySources } from '@components/elephant/IvorySources'

const Elephant = () => (
  <Layout>
    
    <Section id="elephantsection">
    <Title animalname = {"African Elephant"}></Title>
      {/* <h2 className="sectionheader">Elephant</h2> */}
      <QuickFactsElephant />
    </Section>
    <Ivoryintro />
    <IvorySources />
  </Layout>
);

export default Elephant;
