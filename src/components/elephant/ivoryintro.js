import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';
import ivory from '@images/elephant/ivorywhat.png'
import { ReactComponent as Tusks} from '@images/elephant/tusks.svg';


const IvoryIntro = () => ( 
  
    <Section className="ivoryintro">
      
      <Container>
      
          <div id="whativory">
            <h3>What is ivory?</h3>
          </div>
          <div id="whativorybody">
          <Image src={ivory} className="responsive-image" />
          <Tusks />
          <p>
          Dubbed <strong>white gold</strong> ivory is the material that makes up mammal tusks and teeth. Its softness makes it easy to carve into intricate decorative items.
          </p>
          <p>
          The word ivory ultimately derives from the ancient Egyptian âb, âbu, which means "elephant".
          </p>
          </div>
          
      </Container>
    </Section>
  );

export default IvoryIntro