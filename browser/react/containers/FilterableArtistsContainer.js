import React from 'react'
import Artists from '../components/Artists'
import FilterInput from '../components/FilterInput'


export default class FilterableArtistsContainer extends React.Component{
  constructor () {
    super();
    this.state = {
                  value: ''
                 };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event){
    this.setState({value: event.target.value})
  }

  render(){
    const filteredArtists = this.props.artists.filter(artist => artist.name.toLowerCase().match(this.state.value.toLocaleLowerCase()));

    return (
      <div>
        <FilterInput handleChange = {this._handleChange}/>
        <Artists artists = {filteredArtists} />
      </div>
    )
  }
}


