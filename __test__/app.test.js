/* eslint-disable no-undef */
require('dotenv').config();
const app = require('../src/app');
const request = require('supertest');
const { connectDB, disconnectDB } = require('../src/configs/db');
const closeServer = require('../src');

describe('Unit testing', () => {
    beforeAll(() => {
        connectDB();
    });

    afterAll(() => {
        closeServer();
        disconnectDB();
    });

    describe('GET /', () => {
        it('Check server running', async () => {
            const res = await request(app).get('/');
            expect(res.statusCode).toBe(200);
        });
    });
});
