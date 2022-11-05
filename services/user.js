const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.HOST,
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});

//put user

async function getUser() {
  const users = JSON.parse(JSON.stringify(await knex.select().table("users")));
  const UReturn = users.slice();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
  }
  return UReturn;
}
async function updateUser(id, user) {
  await knex("users").where("id", "=", id).update({
    name: user.name,
  });
  return;
}

module.exports = {
  updateUser,
  getUser,
};
