import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';


const PetCard = (props) => {
  const { id, name, species, about, location } = props;
  const onSelectButtonClick = () => {
    props.onSelectPet(props.id);
  }
  const onRemoveButtonClick = () => {
    props.onRemovePet(props.id);
  }
  return (
    <div className="card pet-card">

      <section className="pet-card--header">

        {speciesEmoji(species)} {id} - {name}
        <button
          className="btn btn-primary pet-card--select-pet-btn"
          onClick={onSelectButtonClick}
        >
          Select
        </button>
        <button
          type="button"
          className="btn btn-danger pet-card--remove-btn"
          aria-label="Remove"
          onClick={onRemoveButtonClick}
        >
          Remove
        </button>
      </section>
      <section className="pet-card--body">
        {about.length > 128 ? `${ about.substring(0, 128) }...` : about}
      </section>
      <section className="pet-card--footer text-muted">
        {location}
      </section>
    </div>
  );
};

PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  about: PropTypes.string,
  location: PropTypes.string,
  onSelectPet: PropTypes.func.isRequired,
  onRemovePet: PropTypes.func.isRequired
}

export default PetCard;