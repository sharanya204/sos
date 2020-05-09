import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';
import { ReactComponent as DestinationMaster} from '@images/elephant/DestinationsMaster.svg';

export const IvoryDestinations = () => ( 
    <Section className="destinationsection">
      <Container>
        <div className="whativory">
                <h3>Today, ivory exported from Africa finds its way all over the earth, with the following destinations leading the pack:</h3>
        </div>

        <div className="spacer"> </div>

        <div className="destinations">
            <div className="destinationmaster">
            <DestinationMaster />
            </div>
        <div className="tooltiptext">
            <div className="spacer"><p><strong><span className="texthl">Vietnam</span></strong> is the world’s leading destination for illegal ivory and is implicated in <strong><span className="texthl">22% of the total</span></strong> of large-scale ivory seizures</p><br /></div>
            <div className="spacer"> <p><br />Elephant poaching is conducted by <strong><span className="texthl">helicopters, military grade weaponry, and poisoned pumpkins</span></strong></p></div>
            {/* <br />
            <p><strong><span className="texthl">Vietnam</span></strong> is the world’s leading destination for illegal ivory and is implicated in <strong><span className="texthl">22% of the total</span></strong> of large-scale ivory seizures</p> */}
            </div>
        </div>

        
        <div className="spacer"> </div>

            
      </Container>
    </Section>
  );

  export default IvoryDestinations