import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';
import { ReactComponent as IconWalrus} from '@images/elephant/sources-01.svg';
import { ReactComponent as IconOrca} from '@images/elephant/sources-02.svg';
import { ReactComponent as IconNarwhal} from '@images/elephant/sources-03.svg';
import { ReactComponent as IconWarthog} from '@images/elephant/sources-04.svg';
import { ReactComponent as IconHippo} from '@images/elephant/sources-05.svg';

function replace() {
    const elems = document.querySelectorAll('[data-replace]');
elems.forEach(elem => {
  elem.addEventListener("mouseover", function() {
    this.dataset["original"] = this.innerHTML;    // store the text as data-original
    this.innerHTML = this.dataset["replace"];     // update the html to be data-replace
  });
  elem.addEventListener("mouseout", function() {
    this.innerHTML = this.dataset["original"];    // revert back to data-original
  });
});
}


export const IvorySources = () => ( 
    <Section>
      <Container>
      <div className="whativory">
            <h3>Animal sources of ivory</h3>
          </div>
      <div className="sourcetext">
                <p><span>Sources of ivory are primarily the two modified incisors of living and extinct members of the Proboscidea family: Asian and African elephants and extinct mammoth from Alaska and Siberia. 
                    
                However, since their chemical structure is identical to elephant tusks, other mammals with large enough teeth to be carvable are used instead (hover on each animal for more information). </span></p>
            </div>

            <div className="spacer"> </div>
            <div className="sources">
            <div id="sourcesparent">
                <IconWalrus className="sourceicons" id="walrus">
                </IconWalrus>

                <IconOrca className="sourceicons" id="orca">
                </IconOrca>

                <IconNarwhal className="sourceicons" id="narwhal">
                </IconNarwhal>

                <IconWarthog className="sourceicons" id="warthog">
                </IconWarthog>

                <IconHippo className="sourceicons" id="hippo">
                </IconHippo>
                <div className="spacer"> </div>

                <p id="walrustext">Walrus ivory carving is traditional in Arctic cultures of North America, Russia and Greenland. Trade began with Vikings who were looking for a replacement for elephant ivory in the Early Medieval period.</p>

                <p id="orcatext">Scrimshawing is the art of carving intricate designs on whale bones or teeth (ivory), generally sourced from sperm or killer what teeth. It was originally practiced by sailors working on whaling ships out of New England as a means of passing time while idle at sea.</p>

                <p id="narwhaltext">Narwhal ivory is harvested from the elongated tooth that (mostly) males grow from their heads. This tusk has been attributed with the creation of unicorn legends. Narwhals have been harvested for hundreds of years by Inuit people in northern Canada and Greenland for meat and ivory.</p>

                <p id="warthogtext">Warthog ivory comes from the upper and lower canines, and is remarkably similar to elephant tusks. They are harvested and carved predominantly for the tourist trade in east and southern Africa.</p>

                <p id="hippotext">Hippopotamus ivory is harder than elephant ivory and is more difficult to carve. It was, however, commonly used in the eighteenth century to make dentures and also to replace individual teeth.</p>
            </div>
            </div>
            {/* <div className="spacer"></div> */}
            
      </Container>
    </Section>
  );

  export default IvorySources