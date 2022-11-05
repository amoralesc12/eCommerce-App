const userService = require("../services/user");

async function getU(_, res) {
  const students = await userService.getUser();
  res.send(students);
}

async function update(req, res) {
  //parametros
  const { id } = req.params;
  const user = req.body;
  await userService.updateUser(id, user);
  res.send();
}

module.exports = {
  update,
  getU,
};
