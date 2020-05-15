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
               Save Our Species is an information visualization project that explores how human activities contributed to the gross imbalance between the human and animal world. We tell the stories of endangered species to illustrate specific human drivers of endangerment and their downstream impacts on the ecosystems we live in.

              </p>
            </div>

        </Container>
      </Section>


);

const Spacer = styled.div`
  margin-bottom: 32px;
`;


export default About;
