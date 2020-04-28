import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { Section, Container } from '@components/global';
import '@styles/stylesheet.css';
import ivory from '@images/elephant/ivorywhat.png'


const IvoryIntro = () => ( 
  
    <Section className="ivoryintro">
      
      <Container>
      <Image src={ivory} className="responsive-image" />
          <div id="whativory">
            <h3>What is ivory?</h3>
          </div>
          <div>
          <p>
          Dubbed <strong>white gold</strong> ivory is the material makes up mammal tusks and teeth. Its softness makes it easy to carve into intricate decorative items.
          </p>
          </div>
          
      </Container>
    </Section>
  );

export default IvoryIntro