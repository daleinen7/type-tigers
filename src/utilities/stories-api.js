import sendRequest from './send-request';

const BASE_URL = '/api/stories';

export function getOne(storyID) {
  return sendRequest(`${BASE_URL}/${storyID}`);
}