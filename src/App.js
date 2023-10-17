import React from 'react'
import './styles/style.scss'

// import {article, Brand, CTA, Feature, Navbar} from './component';
import { Footer, Blog, Possibility, Universe, Header } from './containers';
import { Brand, Navbar } from './components';

const App = () => {
    return (
        <div className='app'>
            <div className='bg-gradient'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Universe />
            <Possibility />
            {/* <Blog /> */}
            <Footer />
        </div>
    )
}

export default App
