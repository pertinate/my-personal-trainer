import { type Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  tablesFilter: ["fitness_*"],
} satisfies Config;
