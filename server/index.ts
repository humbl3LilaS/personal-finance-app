import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.get("/api/v1/test", (c) => {
	return c.json({
		super: true,
	});
});

export default app;
