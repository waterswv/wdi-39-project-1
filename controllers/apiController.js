// setup index function to return API documentation & end-point details

function index (req, res) {
  console.log ("This endpoint displays docs details");
  res.json({
    message: 'Welcome to Our Pool App!',
    documentation_url: 'https://github.com/waterswv/wdi-39-project-1',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

// controllers/apiController.js
module.exports = {
  index: index
};
