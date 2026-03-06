import {
  pgTable,
  serial,
  varchar
} from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  id: serial("user_id").primaryKey(),
  name: varchar("user_name", { length: 50 }).notNull(),
});