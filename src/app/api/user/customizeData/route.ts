import { getDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const sql = await getDb();
    const body = await request.json();
    const { username, email, phoneNumber } = body;

    // Check if email already exists
    const existingUser = await sql`SELECT * FROM customize WHERE email = ${email}`;
    if (existingUser.length > 0) {
      return Response.json(
        { success: false, error: "Email already exists." },
        { status: 409 }
      );
    }

    // Insert new record
    const result = await sql`
      INSERT INTO customize (username, email, phone_number)
      VALUES (${username}, ${email}, ${phoneNumber})
      RETURNING *
    `;

    return Response.json({ success: true, data: result[0] }, { status: 201 });
  } catch (err: any) {
    return Response.json({ success: false, error: err.message }, { status: 400 });
  }
}
