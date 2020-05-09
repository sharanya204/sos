import React from 'react';
import elephantqf from '@images/quickfacts/quickfactselephant.png';
import frogqf from '@images/quickfacts/frogquickfacts.png.svg'
import saigaqf from '@images/quickfacts/saigaquickfacts.png'
import Image from 'react-bootstrap/Image'
import { Section, Container } from '@components/global';

import '@styles/stylesheet_elephant.css';

import { useStaticQuery } from "gatsby"

// const data = () => useStaticQuery(graphql`
//     query {
//       file(relativePath: { eq: "3.png" }) {
//         childImageSharp {

//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

export const QuickFactsElephant = () => ( 
  <Section className="quickfacts">
    <Container>
        <div className = "responsive-image">
        <Image src={elephantqf} className="img-fluid" />
        </div>
    </Container>
  </Section>
);


export const QuickFactsYellowFrog = () => (
  <Section className="quickfacts">
    <Container>
        <div className = "responsive-image">
        <Image src={frogqf} className="img-fluid" />
        </div>
    </Container>
  </Section>
);


export const QuickFactsSaiga = () => (
  <Section className="quickfacts">
    <Container>
        <div className = "responsive-image">
        <Image src={saigaqf} className="img-fluid" />
        </div>
    </Container>
  </Section>
);