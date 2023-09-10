/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    { id: 1, title: 'Mean Girls', created_at: new Date(), updated_at: new Date() },
    { id: 2, title: 'Hackers', created_at: new Date(), updated_at: new Date() },
    { id: 3, title: 'The Grey', created_at: new Date(), updated_at: new Date() },
    { id: 4, title: 'Sunshine', created_at: new Date(), updated_at: new Date() },
    { id: 5, title: 'Ex Machina', created_at: new Date(), updated_at: new Date() },
  ]);
};
