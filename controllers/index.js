// requiring controllers within index

module.exports = {
  api: require('./apiController'),
  pools: require('./poolsController'),
  events: require('./eventsController')
}
