import React from 'react';
import PropTypes from "prop-types"
import '@styles/stylesheet_elephant.css';

import { Section, Container } from '@components/global';

const Title = ({ animalname }) => (
    
    
    //   <Section id="animaltitle">
        <Container id="animaltitle">
          <h1 className="animaltitlestyle">{animalname}</h1>
        </Container>
    //   </Section>

)
Title.propTypes = {
    siteTitle: PropTypes.string,
}


export default Title
