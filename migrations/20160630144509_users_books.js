
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_books', (table) => {
    table.increments();
    table.integer('id')
      .notNullable()
      .references('book_id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('artist_id')
      .notNullable()
      .references('books_id')
      .inTable('artists')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_artists');

};



┌───────────────────────────────────────────────────────────────────────────────────────────┐
│                                        users_books                                        │
├────────────────┬─────────────────────────┬────────────────────────────────────────────────┤
│id              │serial                   │primary key                                     │
│book_id         │integer                  │not null references books(id) on delete cascade │
|user_id         │integer                  │not null references users(id) on delete cascade │
│created_at      │timestamp with time zone │not null default now()                          │
│updated_at      │timestamp with time zone │not null default now()                          │
└────────────────┴─────────────────────────┴────────────────────────────────────────────────┘
