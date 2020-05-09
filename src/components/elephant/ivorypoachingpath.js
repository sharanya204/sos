import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';
import { ReactComponent as IconHK} from '@images/elephant/destination-01.svg';
import { ReactComponent as IconCambodia} from '@images/elephant/destination-02.svg';
import { ReactComponent as IconMalaysia} from '@images/elephant/destination-03.svg';
import { ReactComponent as IconJapan} from '@images/elephant/destination-04.svg';
import { ReactComponent as IconChina} from '@images/elephant/destination-05.svg';
import { ReactComponent as IconVietnam} from '@images/elephant/destination-06.svg';
import { ReactComponent as IconAfrica} from '@images/elephant/destination-07.svg';
import { ReactComponent as IconHelicopter} from '@images/elephant/destination-08.svg';
import { ReactComponent as IconWeaponry} from '@images/elephant/destination-09.svg';
import { ReactComponent as IconPumpkin} from '@images/elephant/destination-10.svg';

export const PoachingTools = () => ( 
    <Section>
      <Container>
      <div className="whativory">
            <h3>Ivory from source to destination</h3>
          </div>
      <div className="sourcetext">
                <p><span>Sources of ivory are primarily the two modified incisors of living and extinct members of the Proboscidea family: Asian and African elephants and extinct mammoth from Alaska and Siberia. 
                    
                However, since their chemical structure is identical to elephant tusks, other mammals with large enough teeth to be carvable are: </span></p>
            </div>
            
      </Container>
    </Section>
  );

  export default IvorySources