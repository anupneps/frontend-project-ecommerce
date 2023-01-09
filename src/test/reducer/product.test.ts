// import { deleteAproduct,fetchAllProducts, sortByName, sortByPrice } from "../../redux/reducers/productReducer"
// import { createStore } from "../../redux/store"
// import { StoreInterface } from "../../types/StoreInterface"
// import server from "../shared/server"
// import { testProductData } from "../test-data/productTestData"

// let store: StoreInterface

// beforeAll(() => {
//     server.listen()
// })

// afterAll(() => {
//     server.close()
// })

// beforeEach(() => {
//     store = createStore()
// })

// describe("Testing actions from product reducer", () => {
//     test("Should get the initial state", () => {
//         expect(store.getState().productReducer.length).toBe(0)
//     })
//     test("Should fetch all the products", async () => {
//         await store.dispatch(fetchAllProducts())
//         expect(store.getState().productReducer.length).toBe(3)
//     })
//     /* need to write an action for this test */
//     // test("Should create a product", async()=>{
//     //     await store.dispatch(createProduct())
//     //     const newProduct:Product = {
//     //         // create a dummy product here //
//     //     }
//     //     expect(store.getState().productReducer.length).toBe(246)
//     // })
//     test("Should sort the products in ascending/descending order", async () => {
//         await store.dispatch(fetchAllProducts())
//         store.dispatch(sortByName('asc')) // with 'desc' sort in descending order
//         expect(store.getState().productReducer[0].title).toBe('Electronic Rubber Sauce')
//         expect(store.getState().productReducer[1].title).toBe('Incredible Metal Bacon')
//         expect(store.getState().productReducer[2].title).toBe('Tasty Granite Mouse')
//     })
//     test("Should sort the products price in ascending/descending order", async () => {
//         await store.dispatch(fetchAllProducts())
//         store.dispatch(sortByPrice('asc'))
//         expect(store.getState().productReducer[0].price).toBe(120)
//         expect(store.getState().productReducer[1].price).toBe(317)
//         expect(store.getState().productReducer[2].price).toBe(553)
//     })
//     // test("Should delete a product from server", async()=>{
//     //     await store.dispatch(fetchAllProducts())
//     //     await store.dispatch(deleteAproduct(testProductData[1]))
//     //     expect(store.getState().productReducer[1].id).toBe(11)
//     // })

// })

// // describe("Testing cart reducers functions", ()=>{

// //     test("appending an item to an array", ()=>{
// //         const arr = []
// //         const item = 'test'
// //         arr.push(item)

// //         expect(arr.includes(item)).toBe(true)
// //     })
// // })

export {}

