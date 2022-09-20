import { db } from "$api/src/lib/db";

export async function routeParameters() {
  return (await db.category.findMany({ take: 3 })).map((category) => ({ id: category.id}))
}
