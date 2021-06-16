import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddThingsAndOrders1620037951321 implements MigrationInterface {
  name = 'AddThingsAndOrders1620037951321';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'thing',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );
    await queryRunner.createTable(
      new Table({
        name: 'order',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'alias',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
      true,
    );

    await queryRunner.addColumns('order', [
      new TableColumn({ name: 'userId', type: 'int' }),
      new TableColumn({ name: 'thingId', type: 'int' }),
    ]);

    await queryRunner.createForeignKeys('order', [
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
      }),
      new TableForeignKey({
        columnNames: ['thingId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'thing',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('order');
    const foreignKeys = table.foreignKeys.filter((fk) => {
      const columnNames = fk.columnNames;
      const condition =
        columnNames.indexOf('userId') !== -1 ||
        columnNames.indexOf('thingId') !== -1;
      return condition;
    });
    await queryRunner.dropForeignKeys('order', foreignKeys);
    const tableColumn = table.columns.filter(({ name }) =>
      ['userId', 'thingId'].includes(name),
    );
    await queryRunner.dropColumns('order', tableColumn);
    await queryRunner.dropTable('order');
    await queryRunner.dropTable('thing');
  }
}
