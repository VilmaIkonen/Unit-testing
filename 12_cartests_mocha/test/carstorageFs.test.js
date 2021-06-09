'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;

const storage = require('../carstorageFs');

describe('testing getWithLicence', function(){
    it('getLicence', function(){
        return expect(storage.getWithLicence('ABC-1'))
            .to.eventually.deep.equal({ 
                "model": "Nova", 
                "licence": "ABC-1", 
                "type": "GT" });
    });

    it('not found', function(){
        expect(storage.getWithLicence('x')).to.eventually.to.be.null;
    });

    it('missing parameter', function(){
        expect(storage.getWithLicence()).to.be.rejectedWith('licence number missing');
    });
});