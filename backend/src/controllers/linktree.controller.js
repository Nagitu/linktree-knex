const linktreemodel = require('../models/linktree.model')
const express = require('express');

class linktree {
    async getAllLinks(_, res) {
        try {
            const dataLink = await linktreemodel.getLinks()
            res.status(400).json({ data: dataLink })
        }
        catch (error) {
            res.json({ message: error })
        }
    }

    async getLinkById(req, res) {
        try {
            const id = req.params['id']
            const dataLink = await linktreemodel.getLinkById(id)
            if (dataLink == 0) {
                return res.json({ message: "data tidak ada" })
            }
            res.status(400).json({ data: dataLink })
        }
        catch (error) {
            res.json({ data: error })
        }
    }

    async deleteLink(req, res) {
        try {
            const id = req.params['id'];
            const dataLink = await linktreemodel.getLinkById(id);

            if (dataLink == 0) {
                return res.json({ message: 'Link yang dimaksud tidak ada' });
            }

            const deletedID = await linktreemodel.deleteByID(id);

            if (deletedID === 0) {
                return res.status(400).json({ message: "Tidak ada data pengguna yang berhasil dihapus", data: deletedID });
            }

            res.status(200).json({ message: "Data pengguna berhasil dihapus" });
        } catch (error) {
            res.status(500).json({ message: 'Terjadi kesalahan saat menghapus data', data: error });
        }
    }


    async addLink(req, res) {
        try {
            const { name, link } = req.body
            const dataLink = await linktreemodel.addLink(req.body.name, req.body.link)
            res.json({ message: 'data berhasil ditambah', data: dataLink })
        }
        catch (error) {
            res.json({ message: error })
        }
    }

    async editLink(req, res) {
        try {
            const id = req.params.id
            const dataLink = await linktreemodel.getLinkById(id);
            if (dataLink == 0) {
                return res.json({ message: 'Link yang dimaksud tidak ada' });
            }
            const { name, links } = req.body || dataLink
            const editData = await linktreemodel.editLink(id,name, links)
            if (editData === 0) {
                return res.status(400).json({ message: "Tidak ada data pengguna yang berhasil diubah", data: editData });
            }
            res.status(200).json({ message: "Data pengguna berhasil diubah", data: editData });

        }
        catch (error) {
            res.status(500).json({ message: 'Terjadi kesalahan saat mengubah data', data: error });
        }
    }
}

module.exports = linktree