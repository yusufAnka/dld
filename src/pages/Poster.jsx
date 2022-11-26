import React from 'react';
import Flyer from '../components/Flyer/Flyer';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';

const Poster = () => {
  return (
    <div>
        <Nav />
        <Flyer />
        <div className="flybtn">
            <button >Download Flier</button>
        </div>
    </div>
  )
}

export default Poster;