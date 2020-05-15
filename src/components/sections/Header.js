import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import bannerimg from '@images/art/build.png'
import { Container } from '@components/global';
// import ExternalLink from '@common/ExternalLink';

const Header = () => (

      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <div className="banner">
              <Image src={bannerimg} className="img-fluid" />
              </div>              
            </Art>
            <Text>
              <h1>
                SOS
              </h1>
              <h2>
                Save Our Species
              </h2>
              <br />
              <p>
              From the first cave paintings of human-animal partnerships to modern day animal memes, human and animal lives have always been intertwined. While there are countless examples of mutualism between humans and animals, in recent years, this symbiosis has given way to parasitism in favor of the humans, and the ecological balance the planet has maintained for so many millennia is starting to tip.
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>

);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 128px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 160px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 60px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

// const StyledExternalLink = styled(ExternalLink)`
//   color: inherit;
//   text-decoration: none;

//   &:hover {
//     color: ${props => props.theme.color.black.regular};
//   }
// `;

export default Header;
