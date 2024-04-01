
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: "student_assignment_db",
      user: "postgres",
      password: "12345"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


};
