import React from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';
import { Section, Container } from '@components/global';
import '@styles/stylesheet_elephant.css';

export const CounterUp = () => (

    <Section className="ivoryintro">
        <Container>
            <div className="whativory">
                <h3>Dire straits</h3>
            </div>
            <div className="sourcetext">
                <p>
                    Elephants are disappearing from the face of this planet at an alarming rate. 
                    The number of elephants that have been killed today:
          </p>
            </div>
            <br />
            <br />
            <div>
                <CountUp start={100*getSecondsToday()/86400} end={100} delay={0} duration={86400 - getSecondsToday()}>
                    {({ countUpRef }) => (
                        <div id="counter">
                            <span ref={countUpRef} />
                        </div>
                    )}
                </CountUp>
                <br />
            <br />
            <p>
                    If we don't do something, and fast, we'll be losing an intelligent, empathetic, captivating species.
          </p>
            </div>
        </Container>
    </Section>
);

function getSecondsToday() {
    let d = new Date();
    console.log(d.getSeconds())
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }

export default CounterUp