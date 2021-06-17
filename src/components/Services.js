import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
// Components
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info: 'There are many variations of passages of Lorem Ipsum available',
      },
      {
        icon: <FaHiking />,
        title: 'Hiking',
        info: 'There are many variations of passages of Lorem Ipsum available',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Shuttle Van',
        info: 'There are many variations of passages of Lorem Ipsum available',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info: 'There are many variations of passages of Lorem Ipsum available',
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
