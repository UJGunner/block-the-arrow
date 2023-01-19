let arrow = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Game over")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
})
basic.forever(function () {
    if (arrow == 1) {
    	
    } else if (arrow == 2) {
    	
    } else if (arrow == 3) {
    	
    } else {
    	
    }
})
basic.forever(function () {
    arrow = randint(1, 4)
    if (arrow == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            # # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(5000)
    } else if (arrow == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # #
            . . # . .
            . . . . .
            `)
        basic.pause(5000)
    } else if (arrow == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(5000)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            `)
        basic.pause(5000)
    }
})
basic.forever(function () {
    music.playMelody("C C C C D F E D ", 120)
    music.playMelody("G G G G G A E F ", 120)
    music.playMelody("D D D D D F E D ", 120)
    music.playMelody("C C5 B A G F E D ", 120)
})
