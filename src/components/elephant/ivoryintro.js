import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';
import ivory from '@images/elephant/ivorywhat.png'
import { ReactComponent as Tusks} from '@images/elephant/tusks.svg';
import { ReactComponent as Skull} from '@images/elephant/skull.svg';


const IvoryIntro = () => ( 
  
    <Section className="ivoryintro">
      
    <Container>

      <div className="whativory">
        <h3>What is ivory?</h3>
      </div>

      <div id="whativorybody">
        
        <div id="introsub">
          <p>
            Dubbed <strong>white gold</strong> ivory is the material that makes up mammal tusks and teeth. Its softness makes it easy to carve into intricate decorative items.
          </p>
        </div>
        <div id="introskull">
          <Skull />
        </div>
        <div id="introsub">
          <p>
            The word ivory ultimately derives from the ancient Egyptian âbu, which means "elephant".
          </p>
        </div>
      </div>

    </Container>
    </Section>
  );

export default IvoryIntro