import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';
import { ReactComponent as ElephantPopulationChart} from '@images/elephant/elephantpop-04.svg';


export const ElephantPopulation = () => ( 
    <Section>
      <Container>
        <div className="whativory">
          <h3>Elephant population</h3>
        </div>
        <div className="sourcetext">
          <p>
          The price of ivory is generally kept under wraps so as to discourage ivory trade. It increased tenfold since 1989, when international trade of African elephant ivory was banned, but plummeted in recent years, as individual countries began banning its import.
          </p>
        </div>

        <div className="img-fluid">
        <ElephantPopulationChart />
        </div>        
            
      </Container>
    </Section>
  );

  export default ElephantPopulation