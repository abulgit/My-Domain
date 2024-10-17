module.exports = (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.status(200).send(`Your IP address is: ${ip}`);
  };
  