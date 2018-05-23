const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../');


describe('Index Html', function() {

	before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('Get a 200 status code and HTML', function() {

    return chai.request(server)
      .get('/server-js')
      .then(function(res) {
        expect(res).to.have.status(200);
      })
  }
}