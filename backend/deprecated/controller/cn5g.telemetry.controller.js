const AbstractController = require('./abstract.controller');

class Cn5gTelemetryController extends AbstractController {

    constructor() {
        super(require('../../model/cn5g.telemetry.model'));
    }
}

const INSTANCE = new Cn5gTelemetryController
module.exports = INSTANCE
