import { createServerFn } from "@tanstack/solid-start";
import { env } from "cloudflare:workers";
import { neon } from "@neondatabase/serverless";

const sql = neon(env.DATABASE_URL ?? "");

export const getData = createServerFn().handler(async () => {
  const data = await sql`select * from todo;`;

  return {
    message: `Running in ${navigator.userAgent}`,
    myVar: env.MY_VAR,
    data,
  };
});
