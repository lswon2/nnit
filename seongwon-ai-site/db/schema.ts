import {integer,sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const settings=sqliteTable('settings',{id:integer('id').primaryKey(),content:text('content').notNull()});
export const applications=sqliteTable('applications',{id:integer('id').primaryKey({autoIncrement:true}),name:text('name').notNull(),phone:text('phone').notNull(),email:text('email').notNull(),age:text('age').notNull(),occupation:text('occupation').notNull(),experience:text('experience').notNull(),wish:text('wish').notNull(),consentedAt:text('consented_at').notNull(),createdAt:integer('created_at').notNull()});
