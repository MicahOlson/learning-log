import React from 'react';
import Log from './Log';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

function LogList(props) {
  useFirestoreConnect([
    { collection: 'logs' }
  ])

  const logs = useSelector(state => state.firestore.ordered.logs);
  const user = firebase.auth().currentUser;

  if (isLoaded(logs)) {
    return (
      <>
        <hr/>
        {logs.map((log) => {
          if (user && (log.userId === user.email)) {
            return <Log
            whenLogClicked={props.onLogSelection}
            topic={log.topic}
            userId={log.userId}
            id={log.id}
            key={log.id}
          />
          }
        })}
      </>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}

LogList.propTypes = {
  onLogSelection: PropTypes.func
};

export default LogList;
