import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable().unique()
      table.string('username', 255).notNullable().unique()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamp('deleted_at', { useTz: true }).nullable().defaultTo(null)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
