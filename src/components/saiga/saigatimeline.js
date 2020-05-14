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
				<p><span>The Saiga antelope have a long history that stretches as far back as the last Ice Age.
					Although they are not a highly recognized species, they have led a tumultuous existence over the past century.
					The Saiga have largely been targeted for medicinal purposes, but recently have experienced even 
					more drastic population declines due to other human-driven activities and environmental changes. </span></p>
				<SaigaTimelineImage></SaigaTimelineImage>
				</div>
		</Container>
	</Section>
);

export default SaigaTimeline