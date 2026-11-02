export async function GET() {
  return Response.json({
    status: "ok",
    app: "LevelCode",
    version: "0.1.0",
    message: "Official LevelCode project scaffold initialized.",
  });
}
