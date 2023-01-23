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
        points += 1
    } else {
        basic.showIcon(IconNames.No)
        lives += -1
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
        points += 1
    } else {
        basic.showIcon(IconNames.No)
        lives += -1
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
        points += 1
    } else {
        basic.showIcon(IconNames.No)
        lives += -1
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
        points += 1
    } else {
        basic.showIcon(IconNames.No)
        lives += -1
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("good job")
})
let arrow = 0
let points = 0
let lives = 3
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
basic.forever(function () {
    if (lives == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("game over")
        basic.showString("" + (points))
    }
})
