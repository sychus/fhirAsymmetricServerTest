const logger = require('@asymmetrik/node-fhir-server-core').loggers.get();
const JSONSchemaValidator = require('@asymmetrik/fhir-json-schema-validator');

// Ejemplo para GET
module.exports.search = (args) => new Promise((resolve, reject) => {
    logger.info('Patient >>> buscamos');
    resolve('NUESTRO GET CON ASYMMETRIC FHIR!!!!!!!!!!!!!!');
});

// Ejemplo para POST
module.exports.create = (args, { req }) => new Promise((resolve, reject) => {
    logger.info('Patient >>> insertamos');
    let paciente = req.body;
    let validator = new JSONSchemaValidator();
    let errors = validator.validate(paciente);
    if (errors.length > 0) {
        console.log('Error en el formato del paciente: ', errors);
        return reject(errors);
    }

    logger.info('Patient >>> OK');
    return resolve({});
});