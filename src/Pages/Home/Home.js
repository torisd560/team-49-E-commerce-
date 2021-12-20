import React from 'react';
import { Spinner } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useFirebase from '../hooks/useFirebase';
import Products from '../Products/Products';
import './Home.css'
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    const { isLoading } = useFirebase()
    if (isLoading) {
        return <div className='text-center my-5'><Spinner animation="border" variant="danger" /></div>
    }
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