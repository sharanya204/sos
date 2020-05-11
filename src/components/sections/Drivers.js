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
              A driver is defined as any natural or human-induced factor that directly or indirectly causes a change in an ecosystem. SOS paints a picture of endangerment and extinction of biodiversity via the lens of human drivers, exploring the changes that human exploitation of our planet has brought about. The current avatar features three drivers, medicine, policy, and art, detailed below, with one animal as the focus for each driver:
              </p>
            </div>

        </Container>
      </Section>


);

const Spacer = styled.div`
  margin-bottom: 32px;
`;


export default Drivers;
