import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_saiga.css';

import { ReactComponent as SaigaTimelineImage } from '@images/Saiga/infographic.svg';

export const SaigaTimeline = () => (
	<Section>
		<Container>
		<div id = "Timeline">
			<h1>The Saiga Saga</h1>
				<br></br>
				<p><span>Saiga antelope have a long history stretching back as far as the last Ice Age.
					Although they are not very well known, they have led a tumultuous existence over the past century.
					Saiga and rhinos are both poached for their horns, as they can sold for high prices to be used in Eastern medicine. </span></p>
				<SaigaTimelineImage></SaigaTimelineImage>
			</div>
		</Container>
	</Section>

);

export default SaigaTimeline