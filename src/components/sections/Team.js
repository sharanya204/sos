import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'react-bootstrap/Image';
import Mia from '@images/team/josh.jpg'
import Phoebe from '@images/team/lisa.jpg'
import Sharanya from '@images/team/ashlyn.jpg'


import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Mia Hart',
    image: Mia,
    role: 'Director of Barketing',
  },
  {
    name: 'Phoebe Lu',
    image: Phoebe,
    role: 'Branch Manager',
  },
  {
    name: 'Sharanya Soundararajan',
    image: Sharanya,
    role: 'Assistant Branch Manager',
  }
];

const Team = () => (
      <Section id="team" accent="secondary">
        <Container style={{ position: 'relative'}}>
          <h1>The Team</h1>
          <TeamGrid>
          {TEAM.map((e, idx) => (
                <div key={idx}>
                  <Image className="img-team" src={e.image} alt={e.name} />
                  <Title>{e.name}</Title>
                  <Subtitle>{e.role}</Subtitle>
                </div>
          ))}
          </TeamGrid>
          
        </Container>
      </Section>
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
