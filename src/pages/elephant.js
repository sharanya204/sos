import React from 'react';
import Ivoryintro from '@components/elephant/Ivoryintro'
// import BarChart from '@components/elephant/IvorySeizures'

import { QuickFactsElephant } from '@sections/QuickFacts.js'
import Layout from '@common/Layout';
import BackHome from '@sections/BackHome';
import Title from '@sections/Title';
import { Section, Container } from '@components/global';
import { IvorySources } from '@components/elephant/IvorySources'
import { IvoryDestinations } from '@components/elephant/IvoryDestinations'
import IvoryPricing from '../components/elephant/ivorypricing';
import IvoryEffect from '../components/elephant/ivoryeffect';
import IvorySeizures from '../components/elephant/ivoryseizures';
import ElephantPopulation from '../components/elephant/elephantpopulation';
import Counter from '../components/elephant/counter'

import NarrativeMain from '../components/elephant/narrative';


const Elephant = () => (
  <Layout>
    <BackHome />
    <Section id="elephantsection">
      <Title animalname={"Driver: Art   //   African Elephant"}></Title>
      {/* <h2 className="sectionheader">Elephant</h2> */}
      <QuickFactsElephant />
    </Section>
    <Ivoryintro />
    <IvorySources />
    <NarrativeMain />
    <IvoryDestinations />
    <IvorySeizures />
    <IvoryEffect />
    <IvoryPricing />
    <ElephantPopulation />
    <Counter />
  </Layout>
);

export default Elephant;
