import { db } from "$api/src/lib/db";

export async function routeParameters() {
  return (await db.post.findMany({ take: 5 })).map((post) => ({ id: post.id}))
}
