import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTables1673796898880 implements MigrationInterface {
    name = 'UpdateTables1673796898880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_settings" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user_settings" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "kind"`);
        await queryRunner.query(`DROP TYPE "public"."users_kind_enum"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_online"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_complete"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "word"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "audio"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "last_seen"`);
        await queryRunner.query(`ALTER TABLE "user_settings" ADD "dark_theme" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`CREATE TYPE "user_settings_language_enum" AS ENUM('Abkhaz', 'Afar', 'Afrikaans', 'Akan', 'Albanian', 'Amharic', 'Arabic', 'Aragonese', 'Armenian', 'Assamese', 'Avaric', 'Avestan', 'Aymara', 'Azerbaijani', 'Bambara', 'Bashkir', 'Basque', 'Belarusian', 'Bengali', 'Bihari', 'Bislama', 'Bosnian', 'Breton', 'Bulgarian', 'Burmese', 'Catalan/Valencian', 'Chamorro', 'Chechen', 'Chichewa/Chewa/Nyanja', 'Chinese', 'Chuvash', 'Cornish', 'Corsican', 'Cree', 'Croatian', 'Czech', 'Danish', 'Divehi/Dhivehi/Maldivian;', 'Dutch', 'English', 'Esperanto', 'Estonian', 'Ewe', 'Faroese', 'Fijian', 'Finnish', 'French', 'Fula/Fulah/Pulaar/Pular', 'Galician', 'Georgian', 'German', 'Greek, Modern', 'Guaraní', 'Gujarati', 'Haitian/Haitian Creole', 'Hausa', 'Hebrew (modern)', 'Herero', 'Hindi', 'Hiri Motu', 'Hungarian', 'Interlingua', 'Indonesian', 'Interlingue', 'Irish', 'Igbo', 'Inupiaq', 'Ido', 'Icelandic', 'Italian', 'Inuktitut', 'Japanese', 'Javanese', 'Kalaallisut, Greenlandic', 'Kannada', 'Kanuri', 'Kashmiri', 'Kazakh', 'Khmer', 'Kikuyu, Gikuyu', 'Kinyarwanda', 'Kirghiz, Kyrgyz', 'Komi', 'Kongo', 'Korean', 'Kurdish', 'Kwanyama, Kuanyama', 'Latin', 'Luxembourgish, Letzeburgesch', 'Luganda', 'Limburgish, Limburgan, Limburger', 'Lingala', 'Lao', 'Lithuanian', 'Luba-Katanga', 'Latvian', 'Manx', 'Macedonian', 'Malagasy', 'Malay', 'Malayalam', 'Maltese', 'Māori', 'Marathi (Marāṭhī)', 'Marshallese', 'Mongolian', 'Nauru', 'Navajo, Navaho', 'Norwegian Bokmål', 'North Ndebele', 'Nepali', 'Ndonga', 'Norwegian Nynorsk', 'Norwegian', 'Nuosu', 'South Ndebele', 'Occitan', 'Ojibwe, Ojibwa', 'Old Church Slavonic/Church Slavic/Old Bulgarian', 'Oromo', 'Oriya', 'Ossetian, Ossetic', 'Panjabi/Punjabi', 'Pāli', 'Persian', 'Polish', 'Pashto/Pushto', 'Portuguese', 'Quechua', 'Romansh', 'Kirundi', 'Romanian/Moldavian/Moldovan', 'Russian', 'Sanskrit', 'Sardinian', 'Sindhi', 'Northern Sami', 'Samoan', 'Sango', 'Serbian', 'Scottish Gaelic/Gaelic', 'Shona', 'Sinhala/Sinhalese', 'Slovak', 'Slovene', 'Somali', 'Southern Sotho', 'Spanish/Castilian', 'Sundanese', 'Swahili', 'Swati', 'Swedish', 'Tamil', 'Telugu', 'Tajik', 'Thai', 'Tigrinya', 'Tibetan Standard/Tibetan, Central', 'Turkmen', 'Tagalog', 'Tswana', 'Tonga (Tonga Islands)', 'Turkish', 'Tsonga', 'Tatar', 'Twi', 'Tahitian', 'Uighur/Uyghur', 'Ukrainian', 'Urdu', 'Uzbek', 'Venda', 'Vietnamese', 'Volapük', 'Walloon', 'Welsh', 'Wolof', 'Western Frisian', 'Xhosa', 'Yiddish', 'Yoruba', 'Zhuang/Chuang')`);
        await queryRunner.query(`ALTER TABLE "user_settings" ADD "language" "user_settings_language_enum" NOT NULL DEFAULT 'English'`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "front" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "back" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "score" integer`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "times_practiced" integer`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "level" integer`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "last_practiced_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "due_date" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "due_date"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "last_practiced_at"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "level"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "times_practiced"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "score"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "back"`);
        await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "front"`);
        await queryRunner.query(`ALTER TABLE "user_settings" DROP COLUMN "language"`);
        await queryRunner.query(`DROP TYPE "user_settings_language_enum"`);
        await queryRunner.query(`ALTER TABLE "user_settings" DROP COLUMN "dark_theme"`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "last_seen" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "rating" integer`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "audio" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "photo" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "cards" ADD "word" json`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_complete" boolean DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_online" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`CREATE TYPE "public"."users_kind_enum" AS ENUM('guest', 'user')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "kind" "users_kind_enum" DEFAULT 'guest'`);
        await queryRunner.query(`ALTER TABLE "user_settings" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE "user_settings" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

}
