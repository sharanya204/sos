import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';
import { ReactComponent as IvoryPriceChart} from '@images/elephant/Ivoryprices-01.svg';


export const IvoryPricing = () => ( 
    <Section className="pricesection">
      <Container>
        <div className="whativory">
          <h3>Ivory prices</h3>
        </div>
        <div className="sourcetext">
          <p>
          The price of ivory is generally kept under wraps so as to discourage ivory trade. It increased tenfold since 1989, when international trade of African elephant ivory was banned, but plummeted in recent years, as individual countries began banning its import.
          </p>
        </div>

        <div className="img-fluid">
        <IvoryPriceChart />
        </div>        
            
      </Container>
    </Section>
  );

  export default IvoryPricing