import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_saiga.css';
import { ReactComponent as Combined } from '@images/Saiga/combined.svg';
import { ReactComponent as Intro2 } from '@images/Saiga/intropart2.svg';

export const SaigaIntro = () => (
	<Section>
		<Container>
		<div id = "Intro">
			<h1>The Hidden Rhino</h1>
				<Combined></Combined>
				<p><span>How are Saiga Antelope and Rhinos related? Both species are highly <b>targeted for their horns</b>, which are used in <b>traditional Eastern medicine</b>. 
                    While the rhino has received legal protection and heightened awareness, the same treatment has not been extended to Saiga antelope.
                    It is still legal to trade Saiga horn under certain guidelines, and due to natural events the Saiga
                    population is further dwindling.</span></p>
				<br></br>
				<br></br>
				<h3>Saiga by the Numbers</h3>
				<br></br>
				<center><p><span><Intro2></Intro2></span></p></center>
			</div>
		</Container>
	</Section>
);

export default SaigaIntro;

