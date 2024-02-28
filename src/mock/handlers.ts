import { http, HttpResponse } from 'msw';

import bundles from './dummy.json';

const handlers = [
  http.get('/bundles', async () => {
    await sleep(200);
    return HttpResponse.json(bundles);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default handlers;
