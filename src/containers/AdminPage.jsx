import React from 'react';
// eslint-disable-next-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import { createSection, cancelCreateSectionForm } from '../actions/sectionActions';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {
        name: '',
        mentor_id: '',
        location: '',
        description: '',
        website: '',
      },
    };
  }

  onSave = (event) => {
    event.preventDefault();
    const jwt = localStorage.jwt;
    this.props.createSection(this.state.details, jwt);
  };

  onChange = (event) => {
    const nextDetails = this.state.details;
    nextDetails[event.target.name] = event.target.value;
    return this.setState({ details: nextDetails });
  };

  onCancel = (event) => {
    event.preventDefault();
    this.props.closeSectionForm();
    console.log('cancel');
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-child box">
              <h1 className="title">Create a Section</h1>
              <form>
                <InputComponent title="Name" name="name" onChange={this.onChange} />
                <InputComponent title="Mentor" name="mentor_id" onChange={this.onChange} />
                <InputComponent title="Location" name="location" onChange={this.onChange} />
                <InputComponent title="Description" name="description" onChange={this.onChange} />
                <InputComponent title="Website" name="website" onChange={this.onChange} />

                <div className="field">
                  <div className="control">
                    <button onClick={this.onSave} className="button is-primary">
                      Create Section
                    </button>
                    <button onClick={this.onCancel} className="button">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.loginReducer.uid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(createSection, dispatch),
    createSection: (details, id) => {
      dispatch(createSection(details, id));
    },
    closeSectionForm: () => {
      dispatch(cancelCreateSectionForm());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
