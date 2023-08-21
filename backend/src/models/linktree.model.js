const express = require('express');
const knex = require('knex');
const knexfile = require('../../../knexfile')
const db = knex(knexfile["development"]);


class linktreemodel {
    async getLinks() {
        const dataLink = await db.select('*').table('linktree_knex')
        return dataLink
    }

    async getLinkById(id) {
        const datalink = await db.select('*').table('linktree_knex').where('id', id)
        return datalink
    }

    async deleteByID(id) {
        const deleted = await db('linktree_knex').where('id', id).del()
        return deleted
    }

    async addLink(nama, links) {
        const data = { name: nama, links: links }
        const addData = await db('linktree_knex').insert(data)
        return data;
    }

    async editLink(id ,nama , links){
        const data = {name : nama , links : links}
        const editData = await db('linktree_knex').update(data).where('id',id)
        return data
    }
}

module.exports = new linktreemodel()

