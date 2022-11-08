// @ts-ignore
import { setupServer } from 'msw/node';
// @ts-ignore
import { rest } from 'msw'

const handlers = [
    // @ts-ignore
    rest.post(`${process.env.API_ENDPOINT}/auth/logout`, (req, res, ctx) => {
        console.log('Call logout endpoint');

        return res(ctx.status(200));
    }),
];

export const server = setupServer(...handlers);