import React from 'react';
import Dropzone from 'react-dropzone'

class UserProfile extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      profilePicture: ""
    }
  }

  //onDrop takes arrays of files as arams
	onDrop = (acceptedFiles, rejectedFiles) => {
		if (acceptedFiles.length > 0) {
			//send only the first file uploaded if they use a group
			var filesToBeSent = acceptedFiles[0];
	    
	    //make api call to send image up to server
	    //after promise returns, set the state of profilePicture to URI returned

			console.log(acceptedFiles[0]);
		}
	}

	render() {
    return (
      <div className="tile is-child box">
        <h1 className="title">Your Profile!</h1>
        <Dropzone onDrop={(files) => this.onDrop(files)}>
                <div>Drag and drop a picture of yourself!</div>
          </Dropzone>
      </div>
    );
  }

}
 
export default UserProfile;