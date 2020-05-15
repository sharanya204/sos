import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image'
import artimage from '@images/art/articon.jpg'
import policyimage from '@images/art/policyicon.jpg'
import medicineimage from '@images/art/medicineicon.jpg'

import { Link } from 'gatsby';

import { Section, Container } from '@components/global';

const DriversTiles = () => (
      <Section id="drivers">
        <Container>

          <Grid>
            <GridTile>

              <Link to="saiga" style={{ textDecoration: 'none' }}>
                <custContainer>
                  <div>
                    <h2>Medicine</h2>

                  </div>
                  <div>
                    <p>
                      Many advancements in human health are thanks to animals, from laboratory research to extraction of animal parts for their medicinal value. Click here to learn more about how using their horns for medicine endangers the Saiga antelope.
                  </p>
                  </div>
                  <Spacer></Spacer>

                  <Art>
                  <Image src={medicineimage} className="img-fluid" />                  
                  </Art>
                </custContainer>
              </Link>
            </GridTile>
            {/* <Link to="/pages/404.js"> */}

            {/* </Link> */}
            <GridTile>
              <Link to="yellowfrog" style={{ textDecoration: 'none' }}>
                <custContainer>
                  <div>
                    <h2>Policy</h2>

                  </div>
                  <div>
                    <p>
                      Policy can help or hurt species populations, whether it’s protecting an animal from extinction or enabling the decline of an animal by destroying its habitat. Click here to learn more about how policy endangers the Sierra yellow-legged frog.
              </p>
              <Spacer></Spacer>

                  </div>
                  <Art>
                  <Image src={policyimage} className="img-fluid" />                  
                  </Art>

                </custContainer>
              </Link>
            </GridTile>
            <GridTile>
              <Link to="elephant" style={{ textDecoration: 'none' }}>
                <custContainer>
                  <div>
                    <h2>Art</h2>

                  </div>
                  <div>
                    <p>
                      Animals are often exploited in the name of culture, including commercialization of animal parts and domestication. Click here to learn more about how using ivory for art and culture endangers the African elephant.
              </p>
              <Spacer></Spacer>
                  </div>
                  <Art>
                  <Image src={artimage} className="img-fluid" />                  
                  </Art>
                </custContainer>
              </Link>
            </GridTile>
          </Grid>
        </Container>
      </Section>
);


const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 70px;
  text-align: left;
  align-items: baseline;
  justify-items: center;
  margin: 40px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
    props.inverse &&
    `
        ${Art} {
          order: 2;
        }
    `}
  }
`;
const Spacer = styled.div`
  margin-bottom: 32px;
`;


const GridTile = styled.div`
padding:20px;
height:680px;
  background-color:white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.65);
    }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default DriversTiles;
