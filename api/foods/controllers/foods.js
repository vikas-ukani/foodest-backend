'use strict';
const StrapiMarkdown = require('../../../functions/md')
const model = require('../models/foods.settings.json')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const types = {
    standard: ['richtext', 'text'],
    inline: []
}

const options = {
    smartypants: false,
    headerIds: true,
    breaks: true
}

const { md } = new StrapiMarkdown(model)


module.exports = {
    async find(ctx) {
        return md(await strapi.services.foods.find(ctx.query))
    },
    async findOne(ctx) {
        const { id } = ctx.params
        return md(await strapi.services.foods.findOne({ id }))
    }
}
