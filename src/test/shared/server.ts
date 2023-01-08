import {rest } from "msw"
import {setupServer } from "msw/node"
import { testProductData } from "../test-data/testData"

const handler = [
    rest.get("https://api.escuelajs.co/api/v1/products", (req, res, ctx)=>{
        return res(
            ctx.json(testProductData)
        )
    }),
    rest.post("https://api.escuelajs.co/api/v1/products", async(req, res, ctx)=>{
        const product = await req.json()
        ctx.json(product)
    }),
    rest.delete(`https://api.escuelajs.co/api/v1/products/:id`, async(req, res, ctx)=>{
        ctx.status(202, 'Accepted')
    })
]

const server = setupServer(...handler)
export default server



