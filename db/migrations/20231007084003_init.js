const { table } = require("../db");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('faculty',table=>{
    table.increments('id');
    table.string('email').notNullable().unique();
    table.string('username').notNullable();
    table.string('password').notNullable();
  })
  .createTable('semester',table=>{
    table.increments('id');
    table.integer('semester').notNullable();
  })
  .createTable('program',table=>{
    table.increments('id');
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('semester_id');
    table.foreign('semester_id').references('id').inTable('semester');    
})
.createTable('student',table=>{
    table.increments('id');
    table.string('email').notNullable().unique();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.integer('program_id');
    table.foreign('program_id').references('id').inTable('program');   
})
.createTable('course',table=>{
    table.increments('id');
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('program_id');
    table.integer('faculty_id');
    table.foreign('program_id').references('id').inTable('program');   
    table.foreign('faculty_id').references('id').inTable('faculty');   
  })
.createTable('assignment',table=>{
        table.increments('id');
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.dateTime('due_date').notNullable();
        table.integer('course_id');
        table.integer('faculty_id');
        table.foreign('course_id').references('id').inTable('course');   
        table.foreign('faculty_id').references('id').inTable('faculty');   
    })
.createTable('assignment_submission',table=>{
        table.increments('id');
        table.string('file_url').notNullable();
        table.dateTime('submission_date').notNullable();
        table.integer('assignment_id');
        table.integer('student_id');
        table.foreign('assignment_id').references('id').inTable('assignment');   
        table.foreign('student_id').references('id').inTable('student');   
    })
.createTable('grade',table=>{
        table.increments('id');
        table.dateTime('grading_date').notNullable();
        table.integer('grade').notNullable();
        table.integer('assignment_submission_id');
        table.integer('faculty_id');
        table.foreign('assignment_submission_id').references('id').inTable('assignment_submission');    
        table.foreign('faculty_id').references('id').inTable('faculty');   
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('assignment_submission')
    .dropTable('assignment_submission')
    .dropTable('assignment')
    .dropTable('course')
    .dropTable('student')
    .dropTable('program')
    .dropTable('faculty')
    .dropTable('semester');
  

};
