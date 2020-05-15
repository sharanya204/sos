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

            <div className="secondarydriversicons">
                <Driver1 className="drivericons" id="fur">
                </Driver1>

                <Driver2 className="drivericons" id="migration">
                </Driver2>

                <Driver3 className="drivericons" id="gender">
                </Driver3>

                <Driver4 className="drivericons" id="susceptible">
                </Driver4>

                <Driver5 className="drivericons" id="fight">
                </Driver5>

                <div className="space"> </div>

                <p id="furtext">Overhunting for Saiga meat and skins is the second leading cause of population decline. </p>

                <p id="migrationtext">Saiga migration routes are increasingly encroached on by humans building irrigation, canals, and highways.
                Many young Saiga die trying to pass these barriers.</p>

                <p id="gendertext">Due to males being selectively poached for their horns, there is a gender dichotomy that prolongs the species' ability to bounce back.</p>

                <p id="susceptibletext">Saiga antelope are naturally susceptible to many diseases, which can cause drastic population declines in short periods of time. </p>

                <p id="fighttext">Due to climate change, the steppes are becoming more arid.
                This causes vegetation to degrade, which Saiga antelope rely on for food.</p>
            </div>
            
      </Container>
    </Section>
  );

  export default SaigaSecondaryDrivers;