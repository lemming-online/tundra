import React from 'react';
import Dropzone from 'react-dropzone'

class UserProfile extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      filesToBeSent:[],
    }
  }

	onDrop = (acceptedFiles, rejectedFiles) => {
		//arrays of files
		var filesToBeSent = [];
		//send only the first file uploaded if they use a group
    filesToBeSent.push(acceptedFiles[0]);
    this.setState({filesToBeSent}); 

		console.log(acceptedFiles);
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