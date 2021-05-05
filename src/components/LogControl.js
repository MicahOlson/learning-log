import React from 'react';
import NewLogForm from './NewLogForm';
import LogList from './LogList';
import LogDetail from './LogDetail';
import EditLogForm from './EditLogForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from '../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class LogControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLog: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedLog != null) {
      this.setState({
        selectedLog: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewLogToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedLog = (id) => {
    this.props.firestore.get({collection: 'logs', doc: id}).then((log) => {
      const firestoreLog = {
        name: log.get("name"),
        topic: log.get("topic"),
        notes: log.get("notes"),
        id: log.id
      }
      this.setState({selectedLog: firestoreLog });
    });
  }

  handleDeletingLog = (id) => {
    this.props.firestore.delete({collection: 'logs', doc: id})
    this.setState({selectedLog: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingLogInList = () => {
    this.setState({
      editing: false,
      selectedLog: null
    });
  }

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <>
          <h4>Loading...</h4>
        </>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <>
          <h4>You must be signed in to see your list of topics.</h4>
        </>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = 
          <EditLogForm 
            log = {this.state.selectedLog}
            onEditLog = {this.handleEditingLogInList}
          />
        buttonText = "Return to Log List"
      } else if (this.state.selectedLog != null) {
        currentlyVisibleState =
        <LogDetail
          log={this.state.selectedLog}
          onClickingDelete={this.handleDeletingLog}
          onClickingEdit={this.handleEditClick}
        />
        buttonText = "Return to Log List"
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = 
          <NewLogForm 
            onNewLogCreation={this.handleAddingNewLogToList}
          />
        buttonText = "Return to Log List"
      } else {
        currentlyVisibleState = 
          <LogList 
            onLogSelection={this.handleChangingSelectedLog} 
          />
        buttonText = "Add Log"
      }
      return (
        <>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </>
      );
    }
  }
}

LogControl.propTypes = {
  formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
  }
};

LogControl = connect(mapStateToProps)(LogControl);

export default withFirestore(LogControl);
