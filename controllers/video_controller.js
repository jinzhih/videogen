import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "3.27.125.190",
  port: "3306",
  user: "admin",
  password: "entertainment_admin",
  database: "entertainment_db",
});

export async function GenerateVideo(request, response) {
  const contentId = request.params.id;
  try {
    const [results, fields] = await db.query(
      "SELECT * FROM content WHERE id =?",
      [contentId]
    );
    const { chat_story } = results[0];
    console.log(chat_story);
    return response.json(results);
  } catch (err) {
    if (err != null) response.status(500).send({ err: err.message });
  }

  //Format data
  //Put text on then generate video ; can refer imgPrep from old project
}
