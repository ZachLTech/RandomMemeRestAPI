import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/hello', (c) => {

	let x= 5+6

	return c.json({
    ok: true,
    message: 'Hello Hono!',
		result: x,
  })
})

export default app
