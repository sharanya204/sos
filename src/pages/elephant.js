import React from 'react';
import Ivoryintro from '@components/elephant/Ivoryintro'

import { QuickFactsElephant } from '@sections/QuickFacts.js'
import Layout from '@common/Layout';
import BackHome from '@sections/BackHome';

import Title from '@sections/Title';
import { Section, Container } from '@components/global';
import { IvorySources } from '@components/elephant/IvorySources'
import { IvoryDestinations } from '@components/elephant/IvoryDestinations'
import IvoryPricing from '../components/elephant/ivorypricing';
import NarrativeMain from '../components/elephant/narrative';


const Elephant = () => (
  <Layout>
    <BackHome />
    <Section id="elephantsection">
      <Title animalname={"African Elephant"}></Title>
      {/* <h2 className="sectionheader">Elephant</h2> */}
      <QuickFactsElephant />
    </Section>
    <Ivoryintro />
    <IvorySources />
    <NarrativeMain />
    <IvoryDestinations />
    <IvoryPricing />
  </Layout>
);

export default Elephant;
