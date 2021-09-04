const UserControllers = require('./controllers/UserControllers');
const UserAuthenController = require('./controllers/UserAuthenControllers');
const isAuthenController = require('./authen/isAuthenController');
const BlogController = require('./controllers/BlogController');

module.exports = (app) =>{
    app.post('/user',UserControllers.create);
    app.put('/user/:userId',UserControllers.put);
    app.delete('./user/:userId',UserControllers.remove);
    app.get('/user/:userId',UserControllers.show);
    app.get('/users', isAuthenController, UserControllers.index);
    app.post('/login',UserAuthenController.login);
    app.post('/blog',BlogController.create);
    app.put('/blog/:blogId',BlogController.put);
    app.delete('/blog/:blogId',BlogController.remove);
    app.get('/blog/:blogId',BlogController.show);
    app.get('/blog/:blogId',BlogController.index);
}