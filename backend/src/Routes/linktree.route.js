const express = require('express');
const router = express.Router();
const linktree = require ('../controllers/linktree.controller')


const linktreemodel = new linktree()
router.get('/links', linktreemodel.getAllLinks);
router.get('/link/:id', linktreemodel.getLinkById)
router.delete('/link/delete/:id', linktreemodel.deleteLink)
router.post('/link/add', linktreemodel.addLink)
router.patch('/link/edit/:id', linktreemodel.editLink)


module.exports = router;