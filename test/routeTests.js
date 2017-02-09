const request = require('supertest');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const app = require('../server/server.js');
const { User } = require('../database/model/postgresDB');

describe('api', () => {
	it('returns a 200 status code', (done) => {
		request(app)
			.get('/api')
			.expect(200)
			.end(err => done(err)) 
	});
	
	it('returns JSON', (done) => {
		request(app)
			.get('/api')
			.expect('Content-Type', /JSON/, done);
	});

});

