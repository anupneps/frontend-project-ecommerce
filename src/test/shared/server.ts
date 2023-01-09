import { rest } from "msw"
import { setupServer } from "msw/node"
import { testProductData } from "../test-data/productTestData"
import {users} from "../test-data/usersTestData"


const handler = [
    rest.get("https://api.escuelajs.co/api/v1/products", (req, res, ctx) => {
        return res(
            ctx.json(testProductData)
        )
    }),
    rest.post("https://api.escuelajs.co/api/v1/products", async (req, res, ctx) => {
        const product = await req.json()
        ctx.json(product)
    }),
    rest.delete(`https://api.escuelajs.co/api/v1/products/:id`, async (req, res, ctx) => {
        const { id } = req.params as any;
        // testProductData.filter((index => index.id !== parseInt(id)))
        return res(ctx.json( testProductData.filter((index => index.id !== parseInt(id)))));

    }),
    rest.get("https://api.escuelajs.co/api/v1/users", (req, res, ctx) => {
        return res(
            ctx.json(users)
        )
    }),
    rest.post("https://api.escuelajs.co/api/v1/users/",async (req, res, ctx) => {
        const user = await req.json()
        ctx.json(user)
    })
]

const server = setupServer(...handler)
export default server



