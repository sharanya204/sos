import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const Drivers = () => (
    
    
      <Section id="drivers"  accent="secondary">
        <Container>
          
            <div>
              <h2>Drivers</h2>
              <Spacer></Spacer>
              <p>
              A driver is defined as any natural or human-induced factor that directly or indirectly causes a change in an ecosystem. We focus on three anthropogenic drivers of extinction and loss of biodiversity: medicine, policy, and art. For each driver, we explore the ecological changes of human exploitation through the lens of an endangered species.
              </p>
            </div>

        </Container>
      </Section>


);

const Spacer = styled.div`
  margin-bottom: 32px;
`;


export default Drivers;
