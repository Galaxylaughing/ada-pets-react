import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import NewPetForm from './NewPetForm';


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

  const addPet = (newPet) => {
    const petsLength = props.pets.length - 1;
    const lastPet = props.pets[petsLength];

    newPet.id = lastPet.id + 1;
    props.addPet(newPet);
  }

  return (
    <div>
      <div className="app-card-list card-group">
        {petCardGroup()}
      </div>
      <NewPetForm addPetCallback={addPet}/>
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func.isRequired,
  onRemovePet: PropTypes.func.isRequired,
  addPet: PropTypes.func.isRequired,
};

export default PetList;
