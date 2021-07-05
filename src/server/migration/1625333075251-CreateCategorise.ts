import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateCategorise1625333075251 implements MigrationInterface {
  name = 'CreateCategorise1625333075251';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categorise',
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
          },
          {
            name: 'parentCategoryId',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'publish',
            type: 'boolean',
            default: true,
          },
          {
            name: 'publishStart',
            type: 'timestamp',
          },
          {
            name: 'publishEnd',
            type: 'timestamp',
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
    );
    await queryRunner.createForeignKey(
      'categorise',
      new TableForeignKey({
        columnNames: ['parentCategoryId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categorise',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const productTable = await queryRunner.getTable('product');
    const foreignKey = productTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('category_id') !== -1,
    );
    await queryRunner.dropForeignKey('product', foreignKey);
    await queryRunner.dropColumn('product', 'category_id');
    await queryRunner.dropTable('product');
    await queryRunner.dropTable('categorise');
  }
}
