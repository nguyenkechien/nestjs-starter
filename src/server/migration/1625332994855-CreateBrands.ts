import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBrands1625332994855 implements MigrationInterface {
  name = 'CreateBrands1625332994855';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'brand',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const productTable = await queryRunner.getTable('product');
    const foreignKey = productTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('brand_id') !== -1,
    );
    await queryRunner.dropForeignKey('product', foreignKey);
    await queryRunner.dropColumn('product', 'brand_id');
    await queryRunner.dropTable('product');
    await queryRunner.dropTable('brand');
  }
}
