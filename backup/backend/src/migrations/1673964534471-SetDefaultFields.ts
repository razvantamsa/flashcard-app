import {MigrationInterface, QueryRunner} from "typeorm";

export class SetDefaultFields1673964534471 implements MigrationInterface {
    name = 'SetDefaultFields1673964534471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cards" ALTER COLUMN "score" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "cards" ALTER COLUMN "times_practiced" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "cards" ALTER COLUMN "level" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "cards" ALTER COLUMN "last_practiced_at" SET DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE "cards" ALTER COLUMN "due_date" SET DEFAULT CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cards" ALTER COLUMN "due_date" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "cards" ALTER COLUMN "last_practiced_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "cards" ALTER COLUMN "level" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "cards" ALTER COLUMN "times_practiced" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "cards" ALTER COLUMN "score" DROP DEFAULT`);
    }

}
