import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const sql = await getDb();

    await sql`
      CREATE TABLE IF NOT EXISTS customize (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone_number TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS details (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone_number TEXT NOT NULL,
        places_to_visit TEXT,
        number_of_adults INTEGER DEFAULT 0,
        number_of_children INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    return Response.json({ success: true, message: "Tables created successfully" });
  } catch (err: any) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
