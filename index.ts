import { Hono } from "hono"
import { products } from "./data.json"

const app = new Hono()

app.get("/", (c) => c.text("API Running"))

app.get("/products", (c) => {
  const allProducts = products
  return c.json(allProducts)
})

app.get("/products/:id", async (c) => {
  const productId = c.req.param("id")
  const productIndex = Number(productId) // converted string to number

  const product = products[productIndex] || {}

  return c.json(product)
})

export default app
