const theRemoteDoctor = artifacts.require("theremotedoctor");

module.exports = function (deployer) {
  deployer.deploy(theRemoteDoctor);
};
