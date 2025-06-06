const getSaludo = (req, res) => {
  res.json({message: 'Hola desde el controlador 🧠'});
};

module.exports = {getSaludo};
