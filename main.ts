let poo = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # #
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    poo = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        # # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        # # # . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        # # # . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        # . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        # . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # . # . .
        . . # . .
        # # # . .
        `)
    basic.showLeds(`
        # . # . .
        # . # . .
        . . # . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        . . # . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . # .
        . . . # .
        # # # # .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # . #
        . . . . #
        . # # # #
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (poo == 1) {
    	
    } else {
        poo += 1
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            . . . # .
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # # # . .
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            . . . # .
            . . . # #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            # # # . #
            . . # . #
            . . # # #
            `)
        basic.showLeds(`
            . . . . #
            # # # . #
            . . # . #
            . . # # #
            . . . . .
            `)
        basic.showLeds(`
            # # # . #
            . . # . #
            . . # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . # #
            . # . # .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # # #
            # . # . #
            # # # . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            # . . . .
            # . # # #
            # . # . #
            # # # . #
            . . . . #
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . # # #
            # . # . #
            # # # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # . # .
            # # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # . # . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            # # # . .
            # . # . .
            # . # . .
            . . # . .
            `)
        basic.showLeds(`
            # # # . .
            # . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # . # . .
            # . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # # #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # # #
            # # # . #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # # #
            # # # . #
            . . . . #
            `)
    }
})
