import React, { Component } from 'react';
import elephantqf from '@images/quickfacts/elephant.png';
import Image from 'react-bootstrap/Image'
import { Section, Container } from '@components/global';
import * as d3 from 'd3'
import '@styles/stylesheet.css';


export const IvoryPriceChart = () => ( 
    <Section className="ivoryprice">
      <Container>
          <div className = "responsive-image">
          <Image src={elephantqf} className="img-fluid" />
          </div>
      </Container>
    </Section>
  );