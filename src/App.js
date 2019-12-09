import React, { Component } from 'react';
import PetList from './components/PetList';
// import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
// import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';
// const pets = importData.pets;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
    console.log(pets);
  }

  onSelectPet = (petId) => {
    // find pet with given id
    const foundPet = this.state.petList.find(pet => pet.id === petId);
    // set current pet to identified pet
    this.setState( { currentPet: foundPet } );
  }

  onRemovePet = (petId) => {
    // remove pet with given id from list
    const filteredPets = this.state.petList.filter(pet => pet.id !== petId);
    // assign new list back to state
    this.setState( { petList: filteredPets } );
    // set current pet to undefined
    this.setState( { currentPet: undefined } );
  }

  addPet = (newPet) => {
    // add new pet to list
    const petList = this.state.petList;
    petList.push(newPet);

    // overwrite current list with new list
    this.setState({ petList });
  }

  render () {
    const { currentPet } = this.state;
    console.log(currentPet);

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar />
        </section>
          { /* Wave 1:  Where Pet Details should appear */}
          {currentPet ? <PetDetails currentPet={currentPet} /> : ""}
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */}
          <PetList 
            pets={this.state.petList} 
            onSelectPet={this.onSelectPet} 
            onRemovePet={this.onRemovePet} 
            addPet={this.addPet}
          />
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */}
        </section>
      </main>
    );
  }
}

export default App;
