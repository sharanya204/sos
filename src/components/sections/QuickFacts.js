import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import SEO from '@common/SEO';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

import Img from 'gatsby-image';
import { Section, Container } from '@components/global';

import '@styles/stylesheet.css';

const QuickFactsElephant = () => ( 
  <Section className="quickfacts">
    <Container>
      
        <div>
          <img src="3.png"></img> 
        </div>

    </Container>
  </Section>
);


const QuickFactsYellowFrog = () => (
  <Section className="quickfacts">
    <Container id="">
      
        <div>
          
          <p>
          A driver is defined as any natural or human-induced factor that directly or indirectly causes a change in an ecosystem. SOS paints a picture of endangerment and extinction of biodiversity via the lens of human drivers, exploring the changes that human exploitation of our planet has brought about.
          </p>
        </div>

    </Container>
  </Section>
);


const QuickFactsSaiga = () => (
  <Section className="quickfacts">
    <Container id="">
      
        <div>
          
          <p>
          A driver is defined as any natural or human-induced factor that directly or indirectly causes a change in an ecosystem. SOS paints a picture of endangerment and extinction of biodiversity via the lens of human drivers, exploring the changes that human exploitation of our planet has brought about.
          </p>
        </div>

    </Container>
  </Section>
);

export default QuickFactsElephant;