const AbstractController = require('./abstract.controller')

class GnbLogsController extends AbstractController {

    constructor() {
        super(require('../model/gnbLogs.model'));
    }

}

const INSTANCE = new GnbLogsController()
module.exports = INSTANCE
