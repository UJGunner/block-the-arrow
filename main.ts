input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    if (arrow == 2) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (arrow == 4) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    if (arrow == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    if (arrow == 3) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("score")
    basic.showString("" + (points))
})
let arrow = 0
let points = 0
points = 0
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
    music.playMelody("C - C - D F E D ", 120)
    music.playMelody("G - G - G A E F ", 120)
    music.playMelody("D - D - D F E D ", 120)
    music.playMelody("C C5 B A G F E D ", 120)
})
