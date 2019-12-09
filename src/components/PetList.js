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
          onSelectPet={props.onSelectPet}
          onRemovePet={props.onRemovePet}
        />
      );
    });
  }

  return (
    <div className="app-card-list card-group">
      {petCardGroup()}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func.isRequired,
  onRemovePet: PropTypes.func.isRequired,
};

export default PetList;
