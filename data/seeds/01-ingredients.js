exports.seed = function (knex) {
  return knex("ingredients").insert([
    { id: 1, name: "pumpkin" },
    { id: 2, name: "butter" },
    { id: 3, name: "flour" },
    { id: 4, name: "sugar" },
    { id: 5, name: "cream cheese" }
  ]);
};