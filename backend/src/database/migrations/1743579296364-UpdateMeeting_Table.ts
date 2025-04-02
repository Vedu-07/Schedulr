import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateMeetingTable1743579296364 implements MigrationInterface {
    name = 'UpdateMeetingTable1743579296364'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "isPrivate"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ADD "isPrivate" boolean NOT NULL DEFAULT false`);
    }

}
