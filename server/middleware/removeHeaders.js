const removeHeaders = (req, res, next) => {
    res.removeHeader('X-Powered-By');
    res.setHeader('Lika', 'application');
    next();
  };
  
  module.exports = removeHeaders;