import './App.css';
import {Component} from 'react';
import SearchReasult from './Components/SearchResults';
import FinalResult from './Components/FinalResult';

class App extends Component {
  state = { 
    citySelected: false, 
    searchReasults: [],
    selectedCityDetails: {},
    specialDetail: {},
  };

  cityGotSelected = async (index) => {
    console.log("cityGotSelected")
    console.log("index is :"+index);
    const {searchReasults} = this.state;
    const temp = searchReasults[index];
    // console.log(temp);
    await this.setState((prevState) => ({
      citySelected: true,
      selectedCityDetails: prevState.searchReasults[index],
    }));
    console.log(this.state.selectedCityDetails);
    // this.fetch_specific();
  }

  fetch_specific = async () => {
    const {selectedCityDetails} = this.state;
    const {lat, lon} = selectedCityDetails;
    // console.log(selectedCityDetails);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=15c07d9614ffd01a623a89d957d89cf1`;
    try{
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const specialData = await response.json();
      // console.log(specialData);
      this.setState({
        specialDetail: specialData,
      });
    }catch(error){
      console.error('Error:', error);
    }
  }

  fetch_cities = async () => {
    // console.log("fetch is triggered");
    const element = document.getElementById("cityinput");
    // console.log(element.value);
    try {
      const firstAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${element.value}&limit=10&appid=15c07d9614ffd01a623a89d957d89cf1`;
      const response = await fetch(firstAPI);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // console.log(data);
      this.setState({
        searchReasults: data,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render(){
    const {searchReasults, citySelected, specialDetail} = this.state;
    return (
      <div className="App">
        {/* first child div */}
        <ul className='firstChild'>
          <li><h1>Whether APP</h1></li>
          <li>
            <input 
              id="cityinput"
              onChange={this.fetch_cities}
              className='whetherInput' 
              type="text" 
              placeholder='search city' 
              style={null} 
            />
          </li>
          {!citySelected && 
            searchReasults.map((current, index) => {
              // const {name} = current;
              // console.log(current);
              // console.log("id is :"+index);
              return <SearchReasult 
              key={index} 
              index={index} 
              element={current}
              cityGotSelected={this.cityGotSelected}
              fetch_specific={this.fetch_specific}
            />;
            })
          }
          {citySelected &&
            <FinalResult props={specialDetail} />
          }
        </ul>
        {/* second child div */}
        {/* second child div ended */}
      </div>
    );
  };
}

export default App;
