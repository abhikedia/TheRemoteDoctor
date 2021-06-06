const path = require("path");
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

const getContract = async () => {
  const pathToContract = path.resolve(
    __dirname,
    "../build/theremotedoctor.json"
  );
  const theremotedoctor = await $.getJSON(pathToContract);
  console.log(theremotedoctor);
};

getContract();
