import { Hono } from 'hono'
import { Client } from 'pg'

const app = new Hono()

const client = new Client({
  user: 'yokoyamanaosen',
  database: 'todoapp',
})

await client.connect()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/todos', async (c) => {
  const result = await client.query(
    'SELECT * FROM todos'
  )

  return c.json(result.rows)
})

export default app
