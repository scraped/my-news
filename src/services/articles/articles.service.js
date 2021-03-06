// Initializes the `articles` service on path `/articles`
const createService = require('feathers-nedb');
const createModel = require('../../models/articles.model');
const hooks = require('./articles.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = {
    default: 50,
    max: 100
  };

  const options = {
    name: 'articles',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/articles', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('articles');

  service.hooks(hooks);
};
