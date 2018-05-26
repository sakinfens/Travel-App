const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const {app, runServer, closeServer} = require('../server.js');

const expect = chai.expect;

const API_BASE_URL = require('../config.js');

describe('HomeRout', function(){
	before(function() {
	console.log(runServer);
    return runServer();
  });

  after(function() {
    return closeServer();
  });
  it('should return HTML and 200 status code', function(){
    return chai.request(app)
    .get('/')
    .then(function(res){
      expect(res).to.have.status(200);
      expect(res).to.be.html;
      })
  })
})