import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';
import { ReactComponent as Timeline} from '@images/elephant/ivoryuses-05.svg';

export const NarrativeMain = () => ( 
    <Section className="narrative">
      <Container>
        <div className="whativory">
                <h3>A history of elephant poaching for ivory:</h3>
        </div>
        <div className="timelineparent">
        <div className="timeline">
            <Timeline />
        {/* <div className="tooltiptext">
            <div className="spacer"><p><strong><span className="texthl">Vietnam</span></strong> is the world’s leading destination for illegal ivory and is implicated in <strong><span className="texthl">22% of the total</span></strong> of large-scale ivory seizures</p><br /></div>
            <div className="spacer"> <p><br />Elephant poaching is conducted by <strong><span className="texthl">helicopters, military grade weaponry, and poisoned pumpkins</span></strong></p></div>
            {/* <br />
            <p><strong><span className="texthl">Vietnam</span></strong> is the world’s leading destination for illegal ivory and is implicated in <strong><span className="texthl">22% of the total</span></strong> of large-scale ivory seizures</p> */}
        </div>
            </div>
      </Container>
    </Section>
  );

  export default NarrativeMain