import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => (
  <>
    <Hero hero="roomsHero">
      <Banner title="Our rooms">
        <Link to="/" className="btn-primary">
          Return home
        </Link>
      </Banner>
    </Hero>
    <RoomContainer />
  </>
);

export default Rooms;
