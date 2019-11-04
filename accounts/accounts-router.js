const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {

    db
        .select('*')
        .from('accounts')
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(error => {
            res.status(500).json({ error: 'Failed to get accounts from the database' });
        })
})

router.get('/:id', (req, res) => {
    db
        .select('*')
        .from('accounts')
        .where('id', '=', req.params.id)
        .first()
        .then(account => {
            res.status(200).json(account);
        })
        .catch(error => {
            res.status(500).json({ error: 'Failed to get accounts from database' });
        });
});

router.post('/', (req, res) => {
    db
        .insert(req.body, 'id')
        .into('accounts')
        .then(ids => {
            res.status(200).json(ids);
        })
        .catch(error => {
            res.status(500).json({ error: 'Failed to insert accounts' });
        });
});

router.put('/:id', (req, res) => {
    const changes = req.body;

    db('accounts')
        .where({ id: req.params.id })
        .update(changes)
        .then(count => {
            res.status(200).json(count)
        })
        .catch(error => {
            res.status(500).json({ error: 'Failed to update accounts' });
        });
});

router.delete('/:id', (req, res) => {
    const changes = req.body;

    db('accounts')
        .where({ id: req.params.id })
        .del()
        .then(count => {
            res.status(200).json(count);
        })
        .catch(error => {
            res.status(500).json({ error: 'Failed to delete post' });
        });
});

module.exports = router;