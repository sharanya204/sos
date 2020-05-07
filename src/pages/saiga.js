import React from 'react';

import Layout from '@common/Layout';
import Title from '@sections/Title';
import { Section, Container } from '@components/global';
import { QuickFactsSaiga } from '@sections/QuickFacts.js'
import { SaigaAnimation } from '@components/saiga/saigaanimation' 

const Saiga = () => (
  <Layout>
    <Section id="saigasection">
      {/* <h2 className="sectionheader">Elephant</h2> */}
      <Title animalname = {"Saiga"}></Title>
      <QuickFactsSaiga />
      </Section>
      <SaigaAnimation />
  </Layout>
);

export default Saiga;
