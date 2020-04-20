import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Description from '@sections/Description';
import Drivers from '@sections/Drivers';
import DriverDescription from '@sections/DriverDescription';

import Team from '@sections/Team';
// import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Description />
    <DriverDescription />
    <Drivers />
    {/* <Brands /> */}
    <Team />
    {/* <Faq /> */}
    <Footer />
  </Layout>
);

export default IndexPage;
