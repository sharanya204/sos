import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_saiga.css';
import { ReactComponent as Combined } from '@images/Saiga/combined.svg';

export const SaigaIntro = () => (
	<Section>
		<Container>
		<div id = "Intro">
			<h1>The Hidden Rhino</h1>
				<br></br>
				<p><span>How are Saiga Antelope and Rhinos related? Both species are highly targeted for their horns, which are used in traditional Eastern medicine. 
                    While the rhino has received protection and heightened awareness, the same treatment has not been extended to Saiga antelope.
                    It is still legal to trade Saiga horn under certain guidelines, and due to natural events the Saiga
                    population is further dwindling.</span></p>
                <Combined></Combined>
			</div>
		</Container>
	</Section>
);

export default SaigaIntro;

