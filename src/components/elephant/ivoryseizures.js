import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';
import { ReactComponent as IvoryPriceChart} from '@images/elephant/seizures-03.svg';


export const IvorySeizures = () => ( 
    <Section className="pricesection">
      <Container>

        <div className="img-fluid">
        <IvoryPriceChart />
        </div>        
            
      </Container>
    </Section>
  );

  export default IvorySeizures