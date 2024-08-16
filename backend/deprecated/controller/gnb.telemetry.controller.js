const AbstractController = require('./abstract.controller');

class GnbTelemetryController extends AbstractController {

    constructor() {
        super(require('../model/gnbTelemetry.model'))
    }

}

const INSTANCE = new GnbTelemetryController();
module.exports = INSTANCE;
