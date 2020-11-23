exports.seed = function (knex) {
  return knex("recipes").insert([
    { id: 1, name: "Pumpkin Cheese Cake" },
    { id: 2, name: "Pumpkin Roll" },
  ]);
};