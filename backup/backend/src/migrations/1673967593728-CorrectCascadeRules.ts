import {MigrationInterface, QueryRunner} from "typeorm";

export class CorrectCascadeRules1673967593728 implements MigrationInterface {
    name = 'CorrectCascadeRules1673967593728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "decks" DROP CONSTRAINT "FK_329af7716096378c8e13125edd5"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP CONSTRAINT "FK_48b7cc51062cec29514e72b27b9"`);
        await queryRunner.query(`ALTER TABLE "decks" ADD CONSTRAINT "FK_329af7716096378c8e13125edd5" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cards" ADD CONSTRAINT "FK_48b7cc51062cec29514e72b27b9" FOREIGN KEY ("deck_id") REFERENCES "decks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cards" DROP CONSTRAINT "FK_48b7cc51062cec29514e72b27b9"`);
        await queryRunner.query(`ALTER TABLE "decks" DROP CONSTRAINT "FK_329af7716096378c8e13125edd5"`);
        await queryRunner.query(`ALTER TABLE "cards" ADD CONSTRAINT "FK_48b7cc51062cec29514e72b27b9" FOREIGN KEY ("deck_id") REFERENCES "decks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "decks" ADD CONSTRAINT "FK_329af7716096378c8e13125edd5" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
