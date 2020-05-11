import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Container } from '@components/global';
// import ExternalLink from '@common/ExternalLink';

const BackHome = () => (

    <HeaderWrapper>
        <div className="insideBrand">
                 
        <Brand><Link to="/" style={{ textDecoration: 'none' }}> SOS</Link></Brand>
        </div>

    </HeaderWrapper>
);
const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top:10px;
  padding-bottom:10px;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top:40px;
    padding-bottom:40px;
    }
`;

export const Brand = styled.div`
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.large};
  bottom:30px;
  width:100px;
  padding-left:380px;
`;

export default BackHome;
