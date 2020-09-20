const express = require('express');
const bodyParser = require('body-parser');
const menuController = require('../controllers/menuController');

const menuRouter = express.Router();

menuRouter.use(bodyParser.json());

menuRouter.route('/')
.get(menuController.menu_get)
.post(menuController.menu_post)
.put(menuController.menu_put)
.delete(menuController.menu_delete);

menuRouter.route('/:menuId')
.get(menuController.menu1_get)
.post(menuController.menu1_post)
.put(menuController.menu1_put)
.delete(menuController.menu1_delete);

menuRouter.route('/categories/:category')
.get(menuController.menuCategory);

module.exports = menuRouter;