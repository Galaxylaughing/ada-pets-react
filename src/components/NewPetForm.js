import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
      location: '',
      imagelink: '',
      about: '',
    };
  }
  
  onNameChange = (event) => {
    console.log(`Name updated ${event.target.value}`);
    this.setState({
      name: event.target.value,
    })
  }
  onSpeciesChange = (event) => {
    console.log(`Species updated ${event.target.value}`);
    this.setState({
      species: event.target.value,
    })
  }
  onLocationChange = (event) => {
    console.log(`Location updated ${event.target.value}`);
    this.setState({
      location: event.target.value,
    })
  }
  onImageChange = (event) => {
    console.log(`Image updated ${event.target.value}`);
    this.setState({
      imagelink: event.target.value,
    })
  }
  onAboutChange = (event) => {
    console.log(`About updated ${event.target.value}`);
    this.setState({
      about: event.target.value,
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.name.length > 0
        && this.state.species.length > 0
        && this.state.imagelink.length > 0) {
      
      let petInfo = `• name: ${this.state.name}`;
      petInfo += `\n• species: ${this.state.species}`;
      petInfo += `\n• location: ${this.state.location}`;
      petInfo += `\n• about: ${this.state.about}`;
      petInfo += `\n• image: ${this.state.imagelink}`;
      console.log(petInfo);

      const newPet = {
        name: this.state.name,
        images: [this.state.imagelink],
        species: this.state.species,
        location: this.state.location,
        about: this.state.about,
      };

      this.props.addPetCallback(newPet);

    } else {
      console.log(`All fields must be filled`);
    }
  }

  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.onFormSubmit}>
        <h3>Add a Pet</h3>

        { /* A form should go here! */ }
        <div>
          <label htmlFor="name" className="new-pet-form--label">Name:</label>
          <input 
            name="name" 
            onChange={this.onNameChange}
            value={this.state.name} 
          />
        </div>
        <div>
          <label htmlFor="species" className="new-pet-form--label">Species:</label>
          <input 
            name="species"
            onChange={this.onSpeciesChange}
            value={this.state.species} 
          />
        </div>
        <div>
          <label htmlFor="location" className="new-pet-form--label">Location:</label>
          <input 
            name="location" 
            onChange={this.onLocationChange}
            value={this.state.location}
          />
        </div>
        <div>
          <label htmlFor="imagelink" className="new-pet-form--label">Image:</label>
          <input 
            name="imagelink"
            onChange={this.onImageChange}
            value={this.state.imagelink}
          />
        </div>
        <div>
          <label htmlFor="about" className="new-pet-form--label">About</label>
          <textarea 
            name="about"
            className="new-pet-form--about" 
            onChange={this.onAboutChange}
            value={this.state.about}
          />
        </div>
        
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;