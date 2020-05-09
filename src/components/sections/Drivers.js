import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { Section, Container } from '@components/global';

const Drivers = () => (
  <StaticQuery
    query={graphql`
      query {
        art_ivory: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ivory_desc" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_medicine: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "medicine_desc" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_policy: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "medicine_desc2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="drivers">
        <Container>
          <Grid>
            {/* <Link to="/pages/404.js"> */}
                <div>
                <Link to ="saiga"><h2>Medicine</h2></Link>
                  <p>
                  Many advancements in human health are thanks to animals, from laboratory research to extraction of animal parts for their medicinal value.
                  </p>
                </div>
                <Art>
                  <Img fluid={data.art_medicine.childImageSharp.fluid} />
                </Art>
            {/* </Link> */}
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_policy.childImageSharp.fluid} />
            </Art>
            <div>
            <Link to ="yellowfrog"><h2>Policy</h2></Link>
              <p>
              Policy can help or hurt species populations, whether it’s protecting an animal from extinction or enabling the decline of an animal by destroying its habitat.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <Link to ="elephant"><h2>Culture</h2></Link>
              <p>
              Animals are often exploited in the name of culture, including commercialization of animal parts and domesticated house pets.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ivory.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

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

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Drivers;
