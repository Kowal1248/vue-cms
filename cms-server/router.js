module.exports = function(app) {

  var express = require('express');
  var router = require('express').Router();
  var path = require("path");
  var mes = require("./controllers/settings-controller")
  var pages = require("./controllers/pages-controller")
  var blog = require("./controllers/blog-controller")
  var category = require("./controllers/category-controller")

  var users = require("./controllers/users-controller")
  var menu = require("./controllers/menu-controller")

  var upload = require('./controllers/upload-controller');
  var multiparty = require('connect-multiparty')();

  //  var auth = require("../controllers/auth-controller")
  //  var allegro = require("../controllers/allegro-controller")

  app.route('/')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, '../cms/dist/', 'index.html'));
    })
  app.route('/:anyreq')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, '../cms/dist/', 'index.html'));
    })

  app.route('/api/session')
    .get(users.information_User)
    .post(users.generate_session)

  app.route('/api/users')
    .get(users.get_Users)
    .post(users.save_Users)

  app.route('/api/users/:id')
    .get(users.read_Users)
    .put(users.update_Users)
    .delete(users.delete_Users)

  app.route('/api/settings')
    .get(mes.get_settings)
    .post(mes.save_settings)

  app.route('/api/settings/:id')
    .put(mes.update_settings)


  app.route('/api/pages')
    .get(pages.get_pages)
    .post(pages.save_pages)

  app.route('/api/pages/:id')
    .get(pages.read_pages)
    .put(pages.update_pages)
    .delete(pages.delete_pages)

  app.route('/api/blog')
    .get(blog.get_blog)
    .post(blog.save_blog)

  app.route('/api/blog/:id')
    .get(blog.read_blog)
    .put(blog.update_blog)
    .delete(blog.delete_blog)

  app.route('/api/category')
    .get(category.get_category)
    .post(category.save_category)

  app.route('/api/category/:id')
    .get(category.read_category)
    .put(category.update_category)
    .delete(category.delete_category)

  app.route('/api/menu')
    .get(menu.get_menu)
    .post(menu.save_menu)

  app.route('/api/menu/:id')
    .get(menu.read_menu)
    .put(menu.update_menu)
    .delete(menu.delete_menu)

  app.route('/api/uploads')
    .post(multiparty, upload.upload_file);

  app.route('/api/media/:id')
    .get(upload.download_file)
    .delete(upload.delete_file)

  app.route('/api/media')
    .get(upload.get_files)


};
