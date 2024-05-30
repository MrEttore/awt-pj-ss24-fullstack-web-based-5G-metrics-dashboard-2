
/**
 * Provides generic controller functions for persistence APIs
 */
class GenericController {

    #model;

    constructor(model, app) {
        this.#model = model

        if (app) {
            this.init(app)
        }
    }

    init(app) {
        app.get('/', async (req, res) =>
            await this.getAll(req, res)
        )

        app.get('/:id', async (req, res) => await this.get(req, res))
        app.post('/', async (req, res) => await this.add(req, res))

        return app
    }

    /* Controller for getAll operation */
    async getAll(req, res) {
        const rows = await this.#model.getAll({ ...req.query })

        for (let row of rows) {
            row.href = req.originalUrl + '/' + row.rowId;
        }

        res.json(rows)
    }

    /* Controller for get operation */
    async get(req, res) {
        const ID = req.params.id
        const row = await this.#model.get(ID)

        if (!row) {
            return res.status(404).send()
        }

        res.json(row)
    }

    /* Controller for add operation */
    async add(req, res) {
        const ID = await this.#model.add(req.body)
        const row = await this.#model.get(ID)
        row.href = this.originalUrl + '/' + ID
        res.json(row)
    }

    /* Controller for remove operation */
    async remove(req, res) { }
}

module.exports = GenericController
