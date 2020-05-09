import React, { Component } from 'react';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_saiga.css';
import { ReactComponent as Driver1} from '@images/Saiga/Driver1.svg';
import { ReactComponent as Driver2} from '@images/Saiga/Driver2.svg';
import { ReactComponent as Driver3} from '@images/Saiga/Driver3.svg';
import { ReactComponent as Driver4} from '@images/Saiga/Driver4.svg';
import { ReactComponent as Driver5} from '@images/Saiga/Driver5.svg';

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

export const SaigaSecondaryDrivers = () => ( 
    <Section>
      <Container>
      <div id="secondarydriversheading">
            <h1>Secondary Drivers</h1>
          <br></br>
                <p><span> Other than poaching, the Saiga are also threatened by several other factors.</span></p>
            </div>

            <div className="sources">
                <Driver1 className="sourceicons" id="fur">
                </Driver1>

                <Driver2 className="sourceicons" id="migration">
                </Driver2>

                <Driver3 className="sourceicons" id="gender">
                </Driver3>

                <Driver4 className="sourceicons" id="susceptible">
                </Driver4>

                <Driver5 className="sourceicons" id="fight">
                </Driver5>

                <div className="spacer"> </div>

                <p id="furtext">One of the largest secondary drivers of Saiga antelope endangerment is hunting for Saiga meat and skins.  </p>

                <p id="migrationtext">Saiga migration routes are increasingly encroached on by humans.</p>

                <p id="gendertext">Due to males being poached for their horns, there is a gender dichotomy.</p>

                <p id="susceptibletext">Saiga antelope are naturally susceptible to many diseases. </p>

                <p id="fighttext">Males fight to death during mating season, with 50-70% of males dying in the process.</p>
            </div>
            
      </Container>
    </Section>
  );

  export default SaigaSecondaryDrivers;