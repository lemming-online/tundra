import * as types from './actionTypes';

function url() {
  return 'http://echo.jsontest.com/stuff/jay';
}

export function receiveStuff(json) {
  console.log(json);
  return { type: types.RECEIVE_STUFF, stuff: json.stuff };
}

export function fetchStuff() {
  return dispatch =>
    fetch(url(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => dispatch(receiveStuff(json)));
}
