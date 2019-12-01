const FHIRServer = require('@asymmetrik/node-fhir-server-core');

const {
    fhirServerConfig,
} = require('./config');

let main = async function () {

    // Start our FHIR server
    let server = FHIRServer.initialize(fhirServerConfig);
    server.listen(fhirServerConfig.server.port, () => server.logger.verbose('Iniciando servidor FHIR!'));
};

main();
