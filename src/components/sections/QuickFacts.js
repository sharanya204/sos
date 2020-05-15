import React from 'react';
import { ReactComponent as Elephantqf } from '@images/quickfacts/quickfactselephant-01.svg';
import frogqf from '@images/quickfacts/frogquickfacts.svg'
import saigaqf from '@images/quickfacts/saigaquickfacts.svg'
import Image from 'react-bootstrap/Image'
import { Section, Container } from '@components/global';

import '@styles/stylesheet_elephant.css';


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
        <div className = "img-fluid">
        <Elephantqf />
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