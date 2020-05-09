import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_saiga.css';

import { ReactComponent as SaigaAnimationIcon} from '@images/Saiga/antelopelayers.svg';

export const SaigaAnimation = () => (
	<Section>
		<Container>
		<div id ="WhyImportant">
            <h1>Why are Saiga Antelope important?</h1>
			<br></br>
                <p><span>Saiga antelope are a key species for the steppe ecosystem.
                    
                This simple animation depicts the Saiga's relationship with plants and predators of the steppe.
				
				Click on the antelope to see how loss of the Saiga in the steppe ecosystem would impact other animals
				and plants.</span></p></div>
			<div className="figure">
				<SaigaAnimationIcon classname = "figureicon" id = "figuresaiga">
				</SaigaAnimationIcon>
			</div>
		</Container>
	</Section>

);

export default SaigaAnimation