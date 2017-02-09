import React from 'react'
import NewPlayList from '../components/NewPlayList'
import Songs from '../components/Songs'
import axios from 'axios';

export default class NewPlayListContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      NewPlayListInput: ''
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._Playlists = this._Playlists.bind(this);
  }

  _handleChange(event){
    this.setState({
      NewPlayListInput: event.target.value
    })
  }

  _handleSubmit(event){
    event.preventDefault();
    this._Playlists(this.state.NewPlayListInput)
    this.setState({
      NewPlayListInput: ''
    })
  }

  _Playlists(name){
    axios.post('/api/playlists/',{name})
  .then(res => res.data)
  .then(result => {
  })
  .catch(console.error);
  }

  render(){

    return(
      <div>
        <NewPlayList
        onChange = {this._handleChange}
        onSubmit={this._handleSubmit}
        value = {this.state.NewPlayListInput}
        validInput = {this.validInput}
        NewPlaylists = {this._Playlists}
        />
        <Songs />
      </div>
    )
  }

}
