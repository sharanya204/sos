import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_saiga.css';
import { ReactComponent as Future2 } from '@images/Saiga/Increase.svg';
import { ReactComponent as Future1 } from '@images/Saiga/conservation.svg';
import { ReactComponent as Future3 } from '@images/Saiga/legislation.svg';

export const SaigaFuture = () => (
	<Section>
		<Container>
			<div id="Future">
				<h1>What's Next?</h1>
				<br></br>
				<p><span>Recently, there has been a greater movement towards conserving the Saiga antelope species. 
					However, due to deep cultural and traditional beliefs, poaching for medicinal uses still needs to be carefully addressed.
                    </span></p>
				<br></br>
				<h3>Conservation efforts</h3>
				<br></br>
				<Future1></Future1>
				<p><span>Organizations such as <b>Wildlife Conservation Society (WCS) of China</b> and <b>Saiga Conservation Alliance</b> are spearheading the recovery of the Saiga antelope population.
			WCS China has identified a five-point framework to balance Saiga conservation and the use of traditional eastern medicine.
			<br></br>
					<br></br>
			1. Trade monitoring and management
			<br></br>
					<small>Testing traditional medicine for traces of Saiga horn
				<br></br>
				Promote enforcement of illegal Saiga horn trade</small>
					<br></br>
					<br></br>
			2. Traditional eastern medicine research
			<br></br>
					<small>Develop synthetic replacements for Saiga horn</small>
					<br></br>
					<br></br>
			3. Reintroduction and recovery
			<br></br>
					<small>Facilitate population recovery
				<br></br>
				Reintroduce captive breeding programs
			</small>
					<br></br>
					<br></br>
			4. Cooperation
			<br></br>
					<small>Involve multiple stakeholders in conservation research</small>
					<br></br>
					<br></br>
			5. Public awareness
			<br></br>
					<small>
						Raise awareness around consumption of Saiga horn in relevant communities
			</small>
				</span></p>
				<br></br>
				<h3>Current population trends</h3>
				<br></br>
				<Future2></Future2>
				<p><span>Saiga population patterns have adapted and population numbers are slowly recovering.
					For instance, females sexually mature faster and start reproducing at 1 year of age.
					Saiga also now have mass birthing events over a week rather than spread out through a season to maximize offspring survival.
					<br></br>
					<br></br>
					Experts now estimate that Saiga antelope have a population of around 120,000 individuals, which is an improvement from 40,000.
					However, without further interventions to protect the species, population numbers will remain low.
					</span></p>
				<br></br>
				<h3>Recent legislation</h3>
				<br></br>
				<Future3></Future3>
				<p><span><li>A 1.2-million acre swath in the Altyn Dala (Golden Steppe) region was declared a saiga reserve</li>
				<br></br>
				<li>The Association for the Conservation of Biodiversity of Kazakhstan (ACBK) has been tasked with monitoring Saiga by catching and tagging them, as well as weighing calves</li>
				<br></br>
				<li>Countries in which Saiga reside have implemented hunting bans</li>
				<br></br>
				<li>Saiga Conservation Alliance (SCA) put together an action plan for the Saiga’s preservation, in which the countries Saiga antelope exist have signed</li>
				</span></p>
			</div>
		</Container>
	</Section>
);

export default SaigaFuture;

