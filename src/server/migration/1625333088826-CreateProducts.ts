import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateProducts1625333088826 implements MigrationInterface {
  name = 'CreateProducts1625333088826';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
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
            name: 'price',
            type: 'int',
          },
          {
            name: 'brand_id',
            type: 'int',
          },
          {
            name: 'category_id',
            type: 'int',
          },
          {
            name: 'publish',
            type: 'boolean',
            default: true,
          },
          {
            name: 'publish_start',
            type: 'timestamp',
          },
          {
            name: 'publish_end',
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
    await queryRunner.createForeignKeys('product', [
      new TableForeignKey({
        columnNames: ['brand_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'brand',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      }),
      new TableForeignKey({
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categorise',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product');
  }
}
