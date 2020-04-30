import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';

import { ReactComponent as SaigaAnimationIcon} from '@images/Saiga/antelopelayers.svg';

export const SaigaAnimation = () => (
	<Section>
		<Container>
		<div id="WhyImportant">
            <h3>Why are Saiga Antelope important?</h3></div>
			<div className="AnimationText">
                <p><span>Saiga antelope are a key species for the steppe ecosystem.
                    
                This simple animation depicts the Saiga's relationship with plants and predators of the steppe.</span></p>
            </div>
			<div className="figure">
				<SaigaAnimationIcon classname = "figureicon" id = "figuresaiga">
				</SaigaAnimationIcon>
			</div>
		</Container>
	</Section>

);

export default SaigaAnimation;