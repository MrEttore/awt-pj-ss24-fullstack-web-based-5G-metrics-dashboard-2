const AbstractController = require('./abstract.controller');

/**
 * Provides controller functions for gnb.telemetryUE data
 */
class GnbTelemetryController extends AbstractController {

    constructor() {
        super(require('../model/gnb.telemetryUE.model'))
    }

}

const INSTANCE = new GnbTelemetryController();
module.exports = INSTANCE;
