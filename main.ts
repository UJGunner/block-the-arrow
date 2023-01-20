input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
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
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("score")
    basic.showString("" + (points))
})
let arrow = 0
let points = 0
points = 0
basic.forever(function () {
    if (arrow == 1) {
        basic.pause(5000)
        if (input.buttonIsPressed(Button.A)) {
            points += 1
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showString("score")
            basic.showString("" + (points))
            points = 0
        }
    } else if (arrow == 2) {
        basic.pause(5000)
        if (input.buttonIsPressed(Button.B)) {
            points += 1
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showString("score")
            basic.showString("" + (points))
            points = 0
        }
    } else if (arrow == 3) {
        basic.pause(5000)
        if (input.buttonIsPressed(Button.AB)) {
            points += 1
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showString("score")
            basic.showString("" + (points))
            points = 0
        }
    } else {
        basic.pause(5000)
        if (input.isGesture(Gesture.Shake)) {
            points += 1
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showString("score")
            basic.showString("" + (points))
            points = 0
        }
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
