import React, { Component } from 'react';
import elephantqf from '@images/quickfacts/elephant.png';
import Image from 'react-bootstrap/Image'
import { Section, Container } from '@components/global';
import * as d3 from 'd3'
import '@styles/stylesheet.css';


export const IvoryPriceChart = () => ( 
    <Section className="ivoryprice">
      <Container>
      <div className="whativory">
                <h3>The price of ivory is generally kept under wraps so as to discourage ivory trade. It increased tenfold since 1989, when international trade of African elephant ivory was banned, but dropped in recent years as individual countries began banning . </h3>
        </div>
          <div className = "responsive-image">
          <Image src={elephantqf} className="img-fluid" />
          </div>
      </Container>
    </Section>
  );