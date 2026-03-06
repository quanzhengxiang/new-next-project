import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/server/db/schema.ts",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123123",
    database: "image-saas",
  },
  strict: true,
  verbose: true,
});