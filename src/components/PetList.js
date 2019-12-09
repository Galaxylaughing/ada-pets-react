import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {

  const petCardGroup = () => {
    return props.pets.map((pet, i) => {
      return (
        <PetCard
          key={i}
          {...pet}
        />
      );
    });
  }

  return (
    <div className="app-card-list">
      {petCardGroup()}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
