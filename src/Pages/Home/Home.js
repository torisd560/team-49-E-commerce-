import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import './Home.css'
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <Products></Products>
            <Footer></Footer>
        </div>

    );
};

export default Home;