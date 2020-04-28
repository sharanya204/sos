import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet.css';
import { ReactComponent as IconWalrus} from '@images/elephant/sources-01.svg';
import { ReactComponent as IconOrca} from '@images/elephant/sources-02.svg';
import { ReactComponent as IconNarwhal} from '@images/elephant/sources-03.svg';
import { ReactComponent as IconWarthog} from '@images/elephant/sources-04.svg';
import { ReactComponent as IconHippo} from '@images/elephant/sources-05.svg';

export const PoachingTools = () => ( 
    <Section>
      <Container>
      <div id="whativory">
            <h3>Poaching is carried out using...</h3>
          </div>
      <div className="sourcetext">
                <p><span>Sources of ivory are primarily the two modified incisors of living and extinct members of the Proboscidea family: Asian and African elephants and extinct mammoth from Alaska and Siberia. 
                    
                However, since their chemical structure is identical to elephant tusks, other mammals with large enough teeth to be carvable are: </span></p>
            </div>
            <div className="sources">
                <IconWalrus className="sourceicons" id="sourceiconswalrus">
                </IconWalrus>

                <IconOrca className="sourceicons">
                    <g>
                        <p id="sourcetext" x="0" y="15">Label 1</p>
                    </g>
                </IconOrca>

                <IconNarwhal className="sourceicons">
                    <g>
                        <text x="0" y="15">Label 1</text>
                    </g>
                </IconNarwhal>

                <IconWarthog className="sourceicons">
                    <g>
                        <text x="0" y="15">Label 1</text>
                    </g>
                </IconWarthog>

                <IconHippo className="sourceicons">
                    <g>
                        <text x="0" y="15">Label 1</text>
                    </g>
                </IconHippo>
            </div>
            
      </Container>
    </Section>
  );

  export default IvorySources