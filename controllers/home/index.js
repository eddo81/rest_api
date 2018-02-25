const homeController = function(req, res) {
  
    const jsonData = {
        'name': 'Home',
        'api-status':'OK'
    }

    // respond with json data
    res.json(jsonData)
};

module.exports = homeController;