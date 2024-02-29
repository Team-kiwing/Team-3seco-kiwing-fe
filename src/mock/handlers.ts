import { http, HttpResponse } from 'msw';

import question from './dummy.json';

const handlers = [
  http.get('/question', async () => {
    await sleep(200);
    return HttpResponse.json(question);
  }),
  http.get('/question2', async () => {
    return HttpResponse.json(123);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default handlers;
