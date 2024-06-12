/**
 * Provides generic controller functions for persistence APIs
 */
class AbstractController {

    #model;

    constructor(model, app) {
        this.#model = model

        if (app) {
            this.init(app)
        }
    }

    init(app) {
        app.get('/', async (req, res) => await this.getAll(req, res));
        app.get('/:id', async (req, res) => await this.get(req, res));
        app.post('/', async (req, res) => await this.add(req, res));
        app.delete('/:id', async (req, res) => await this.remove(req, res)); // Assuming you want to add a remove operation

        return app;
    }

    /* Controller for getAll operation */
    async getAll(req, res) {
        try {
            const rows = await this.#model.getAll({ ...req.query });

            for (let row of rows) {
                row.href = req.originalUrl + '/' + row.rowId;
            }

            res.json(rows);
        } catch (error) {
            console.error('Error retrieving all data:', error);
            res.status(500).json({ error: 'An error occurred while retrieving data' });
        }
    }

    /* Controller for get operation */
    async get(req, res) {
        try {
            const ID = req.params.id;
            const row = await this.#model.get(ID);

            if (!row) {
                return res.status(404).json({ error: 'Data not found' });
            }

            res.json(row);
        } catch (error) {
            console.error('Error retrieving data:', error);
            res.status(500).json({ error: 'An error occurred while retrieving data' });
        }
    }

    /* Controller for add operation */
    async add(req, res) {
        try {
            const ID = await this.#model.add(req.body);
            const row = await this.#model.get(ID);
            row.href = req.originalUrl + '/' + ID;
            res.status(201).json(row);
        } catch (error) {
            console.error('Error adding data:', error);
            res.status(500).json({ error: 'An error occurred while adding data' });
        }
    }

    /* Controller for remove operation */
    async remove(req, res) {
        try {
            const ID = req.params.id;
            const success = await this.#model.remove(ID);

            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Data not found' });
            }
        } catch (error) {
            console.error('Error removing data:', error);
            res.status(500).json({ error: 'An error occurred while removing data' });
        }
    }
}

module.exports = AbstractController;
