import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import frogGif from '@images/frog/FrogHabitat.gif';


import Frog1 from '@images/frog/1_frognarrative.svg';
import Frog2 from '@images/frog/2_frognarrative.svg';
import Frog3 from '@images/frog/3_frognarrative.svg';
// import { ReactComponent as Frog2 } from '@images/frog/2_frognarrative.svg';
// import { ReactComponent as Frog3 } from '@images/frog/3_frognarrative.svg';

import '@styles/stylesheet_frog.css';


export const frog1 = () => (
    <Section>
        <Container>
            {/* <div className="whatfrog">
                <h3>The tree frog timeline</h3>
            </div> */}
            <div className="imgparent">
                <img className="frogImages" src={Frog1} />
                <img className="frogImages" src={Frog2} />
                <img className="frogImages" src={Frog3} />
                <div className="gifstyle">
				<img src={frogGif} alt="Frogs disappearing" />
			</div>
            </div>

        </Container>
    </Section>
);

export default frog1