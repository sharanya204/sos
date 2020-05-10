import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_saiga.css';

import { ReactComponent as SaigaAnimationIcon } from '@images/Saiga/antelopelayers.svg';
import SaigaAnimationCode from '@components/saiga/index.js';

export const SaigaAnimation = () => (
	<Section>
		<Container>
		<div id ="WhyImportant">
            <h1>Why are Saiga Antelope important?</h1>
			<br></br>
                <p><span>Saiga antelope are a key species for the steppe ecosystem.
				Without the Saiga, plant diversity and predator populations dramatically decrease.
                This simple animation depicts the Saiga's relationship with plants and predators of the steppe.
				Click on the antelope to see how loss of the Saiga in the steppe ecosystem would impact other animals
				and plants.</span></p></div>
			<div className="figure">
				<script src="https://d3js.org/d3.v5.min.js"></script>
				<SaigaAnimationIcon></SaigaAnimationIcon>
				<SaigaAnimationCode></SaigaAnimationCode>
			</div>
		</Container>
	</Section>

);

export default SaigaAnimation