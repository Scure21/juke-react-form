import React from 'react'
import NewPlayListContainer from '../containers/NewPlayListContainer'

const NewPlaylist =  (props) =>  {

   const validInput = props.value.length >= 16;
   const NoInput = props.value.length === 0
   const NotValid = props.value === '' || props.value > 16

return (
<div className="well">
  <form className="form-horizontal" onSubmit={props.onSubmit}>
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input
          className="form-control"
          type="text"
          onChange={props.onChange}
          value= {props.value}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button
          type="submit"
          className="btn btn-success"
          disabled = {validInput}
          >Create Playlist
          </button>
        </div>
      </div>
      <div>
        {NoInput ? < div className="alert alert-warning">Please enter a playlist name</div>: null}
      </div>
      <div>
        {validInput ? < div className="alert alert-warning">The playlist name can't have more than 16 characters</div>: null}
      </div>
    </fieldset>
  </form>
</div>
)}

export default NewPlaylist;
