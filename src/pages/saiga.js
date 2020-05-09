import React from 'react';

import Layout from '@common/Layout';
import Title from '@sections/Title';
import { Section, Container } from '@components/global';
import { QuickFactsSaiga } from '@sections/QuickFacts.js'
import { SaigaAnimation } from '@components/saiga/saigaanimation' 
import { SaigaTimeline } from '@components/saiga/SaigaTimeline'
import { SaigaSecondaryDrivers } from '@components/saiga/SaigaSecondaryDrivers'

const Saiga = () => (
  <Layout>
    <Section id="saigasection">
      {/* <h2 className="sectionheader">Elephant</h2> */}
      <Title animalname = {"Saiga"}></Title>
      <QuickFactsSaiga />
      </Section>
      <SaigaTimeline />
      <SaigaAnimation />
      <SaigaSecondaryDrivers/>
  </Layout>
);

export default Saiga;

// https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/
// https://stackoverflow.com/questions/51953302/react-component-array-map-nothing-was-returned-from-render-this-usually-means