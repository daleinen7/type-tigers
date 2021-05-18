import sendRequest from './send-request';

const BASE_URL = '/api/kid';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getOne(kidID) {
  return sendRequest(`${BASE_URL}/${kidID}`);
}

export function create(newkidData) {
  console.log('>>>NEW KID DATA<<<', newkidData);
  return sendRequest(BASE_URL, 'POST', newkidData);
}

export function update(kid) {
  return sendRequest(`${BASE_URL}/${kid._id}`, 'PUT', kid);
}

export function deleteOne(kidID) {
  return sendRequest(`${BASE_URL}/${kidID}`, 'DELETE');
}
