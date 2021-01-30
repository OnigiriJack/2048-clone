const swipe = require("./2048_game.js")


let gridLeftOne = [
    [4, 4, 4, 4],
    [4, 2, 0, 2],
    [0, 0, 4, 0],
    [4, 4, 2, 2]
]

test("Left swipe Case 1", () => {
    expect(swipe(gridLeftOne, "left")).toStrictEqual([
        [8, 8, 0, 0],
        [4, 4, 0, 0],
        [4, 0, 0, 0],
        [8, 4, 0, 0]
    ])
})

let gridLeftTwo = [
    [0, 0, 2, 16],
    [16, 2, 16, 0],
    [0, 32, 0, 32],
    [8, 4, 2, 2]
]
test("Left swipe Case 2", () => {
    expect(swipe(gridLeftTwo, "left")).toStrictEqual([
        [2, 16, 0, 0],
        [16, 2, 16, 0],
        [64, 0, 0, 0],
        [8, 4, 4, 0]
    ])
})










// describe("2048 game swipe left function", () => {
//     it("Returns a 2D array", () => {
//         let grid = [
//             [4, 4, 4, 4],
//             [4, 2, 0, 2],
//             [0, 0, 4, 0],
//             [4, 4, 2, 2]
//         ]
//         expect(grid).to.be.an('array')
//     })
//     it("Solves swipe left #1", () => {
//         let grid = [
//             [4, 4, 4, 4],
//             [4, 2, 0, 2],
//             [0, 0, 4, 0],
//             [4, 4, 2, 2]
//         ]
//         expect(swipe(grid, "right")).to.deep.equal([
//             [8, 8, 0, 0],
//             [4, 4, 0, 0],
//             [4, 0, 0, 0],
//             [8, 4, 0, 0]
//         ])
//     })


//     it("Solves swipeLeft#2 ", () => {
//         let grid = [
//             [0, 0, 2, 16],
//             [16, 2, 16, 0],
//             [0, 32, 0, 32],
//             [8, 4, 2, 2]
//         ]
//         let swiped = swipeLeft(grid)
//         expect(swiped).to.deep.equal([
//             [2, 16, 0, 0],
//             [16, 2, 16, 0],
//             [64, 0, 0, 0],
//             [8, 4, 4, 0]
//         ])
//     })


//     it("Solves swipe right #1 ", () => {
//         let grid = [
//             [0, 0, 2, 16],
//             [16, 2, 16, 0],
//             [0, 32, 0, 32],
//             [8, 4, 2, 2]
//         ]
//         expect(swipeLeft(grid)).to.deep.equal([
//             [2, 16, 0, 0],
//             [16, 2, 16, 0],
//             [64, 0, 0, 0],
//             [8, 4, 4, 0]
//         ])
//     })

//     it("Solves swipe right #2 ", () => {
//         let grid = [
//             [0, 0, 2, 16],
//             [16, 2, 16, 0],
//             [0, 32, 0, 32],
//             [8, 4, 2, 2]
//         ]
//         let swiped = kennyLeft(grid)
//         expect(swiped).to.deep.equal([
//             [2, 16, 0, 0],
//             [16, 2, 16, 0],
//             [64, 0, 0, 0],
//             [8, 4, 4, 0]
//         ])
//     })

//     it("Kenny Solves: ", () => {
//         let grid = [
//             [4, 4, 4, 4],
//             [4, 2, 0, 2],
//             [0, 0, 4, 0],
//             [4, 4, 2, 2]
//         ]

//         let swiped = kennyLeft(grid)
//         expect(swiped).to.deep.equal([
//             [8, 8, 0, 0],
//             [4, 4, 0, 0],
//             [4, 0, 0, 0],
//             [8, 4, 0, 0]
//         ])
//     })
// })