const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const {app, runServer, closeServer} = require('../server.js');
const expect = chai.expect;
describe('HomeRout', function(){
  it('should return HTML and 200 status code', function(){
    return chai.request('http://localhost:8080')
    .get('/')
    .then(function(res){
      expect(res).to.have.status(200);
      expect(res).to.be.html;
      })
  })
})

