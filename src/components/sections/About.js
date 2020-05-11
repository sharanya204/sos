import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const About = () => (
    
    
      <Section id="about">
        <Container>
          
            <div>
              <h2>About SOS</h2>
              <Spacer></Spacer>
              <p>
               Save Our Species is an information visualization project that aims to explore specific human activities and drivers that have contributed to the gross imbalance between the human and animal world that we see today.
              </p>
            </div>

        </Container>
      </Section>


);

const Spacer = styled.div`
  margin-bottom: 32px;
`;


export default About;
