const Menu = require('../models/menu');

//requester can view all menu items
exports.menu_get = async (req, res, next) => {
    const menuItems = await Menu.find().catch(err => next(err));
    console.log(menuItems);
    res.json(menuItems); 
};

//requester can add a menu item or array of menu items
exports.menu_post = async (req, res, next) => {
    const menuItems = await Menu.create(req.body).catch(err => next(err));
    console.log('Menu Items Created ', menuItems);
    res.json(menuItems);
};

//multiple menu items cannot currently be changed at once
exports.menu_put = (req, res, next) => {
    res.send('PUT operation not supported');
};
``
//requester can delete all menu items
exports.menu_delete = async (req, res, next) => {
    const menuItems = await Menu.remove().catch(err => next(err));
    res.json(menuItems); 
};



//requester can view a single menu item by its ID
exports.menu1_get = async (req, res, next) => {
    const menuItem = await Menu.findById(req.params.menuId).catch(err => next(err));
    if(menuItem) {
        res.json(menuItem);
    } else {
        res.send(`The menu item ${req.params.menuId} is not in the database`);
    }
};

//use method for '/' above to post a new item
exports.menu1_post = (req, res, next) => {
    res.send(`You cannot POST an item by its Id`);
};

//requester can change a menu item by its ID
exports.menu1_put = async (req, res, next) => {
    const menuItem = await Menu.findByIdAndUpdate(req.params.menuId, { $set: req.body }, { new: true })
    .catch(err => next(err));
    if(menuItem) {
        res.json(menuItem);
    } else {
        res.send(`ID: ${req.params.menuId} does not exist in the database and therefore cannot be updated.`)
    }
};

//requester can delete a single menu item by its ID
exports.menu1_delete = async (req, res, next) => {
    const menuItem = await Menu.findByIdAndDelete(req.params.menuId).catch(err => next(err));
    if(menuItem) {
        res.send(`The item ${menuItem.name} has been deleted`);
    } else {
        res.send(`ID: ${req.params.menuId} does not exist in the database and therefore cannot be deleted.`)
    } 
};



//get menus by category
exports.menuCategory = async (req, res, next) => {
    const categoryBatch = await Menu.find({ category: req.params.category }).catch(err => next(err));
    if(categoryBatch.length) {
        res.json(categoryBatch);
    } else {
        res.send(`The category '${req.params.category}' does not contain any delicious carbs to buy`)
    }
}