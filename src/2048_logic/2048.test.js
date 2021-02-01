const swipe = require("./2048_game.js")



test("Left swipe Case 1", () => {
    let gridLeftOne = [
        [4, 4, 4, 4],
        [4, 2, 0, 2],
        [0, 0, 4, 0],
        [4, 4, 2, 2]
    ]
    expect(swipe(gridLeftOne, "left")).toStrictEqual([
        [8, 8, 0, 0],
        [4, 4, 0, 0],
        [4, 0, 0, 0],
        [8, 4, 0, 0]
    ])
})


test("Left swipe Case 2", () => {
    let gridLeftTwo = [
        [0, 0, 2, 16],
        [16, 2, 16, 0],
        [0, 32, 0, 32],
        [8, 4, 2, 2]
    ]
    expect(swipe(gridLeftTwo, "left")).toStrictEqual([
        [2, 16, 0, 0],
        [16, 2, 16, 0],
        [64, 0, 0, 0],
        [8, 4, 4, 0]
    ])
})



test("Right Swipe Case 1 ", () => {
    let grid = [
        [0, 0, 2, 16],
        [16, 2, 16, 0],
        [0, 32, 0, 32],
        [8, 4, 2, 2]
    ]
    expect(swipe(grid, "right")).toStrictEqual([
        [0, 0, 2, 16],
        [0, 16, 2, 16],
        [0, 0, 0, 64],
        [0, 8, 4, 4]
    ])
})


test("Right swipe Case 2 ", () => {
    let grid = [
        [0, 0, 2, 16],
        [16, 2, 16, 0],
        [0, 32, 0, 32],
        [128, 4, 0, 2]
    ]
    expect(swipe(grid, "right")).toStrictEqual([
        [0, 0, 2, 16],
        [0, 16, 2, 16],
        [0, 0, 0, 64],
        [0, 128, 4, 2]
    ])
})


test("Up Swipe Case 1 ", () => {
    let grid = [
        [0, 0, 2, 16],
        [16, 2, 16, 0],
        [0, 32, 0, 32],
        [8, 4, 2, 2]
    ]
    expect(swipe(grid, "up")).toStrictEqual([
        [16, 2, 2, 16],
        [8, 32, 16, 32],
        [0, 4, 2, 2],
        [0, 0, 0, 0]
    ])
})


test("Up swipe case 2 ", () => {
    let grid = [
        [4, 16, 4, 4],
        [4, 2, 0, 2],
        [0, 0, 4, 0],
        [4, 2, 2, 2]
    ]
    expect(swipe(grid, "up")).toStrictEqual([
        [8, 16, 8, 4],
        [4, 4, 2, 4],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ])
})



test("Down Swipe Case 1 ", () => {
    let grid = [
        [0, 0, 2, 16],
        [16, 2, 16, 0],
        [0, 32, 0, 32],
        [8, 4, 2, 2]
    ]
    expect(swipe(grid, "down")).toStrictEqual([
        [0, 0, 0, 0],
        [0, 2, 2, 16],
        [16, 32, 16, 32],
        [8, 4, 2, 2]
    ])
})


test("Down Swipe case 2 ", () => {
    let grid = [
        [4, 4, 4, 4],
        [4, 2, 0, 2],
        [0, 0, 4, 0],
        [4, 4, 2, 2]
    ]
    expect(swipe(grid, "down")).toStrictEqual([
        [0, 0, 0, 0],
        [0, 4, 0, 0],
        [4, 2, 8, 4],
        [8, 4, 2, 4]
    ])
})

