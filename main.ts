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
    basic.clearScreen()
    basic.showString("score")
    basic.showString("" + (points))
    basic.showString("high score")
    basic.showString("" + (high_score))
})
let high_score = 0
let arrow = 0
let points = 0
points = 0
let lives = 3
basic.forever(function () {
    arrow = randint(1, 4)
    if (arrow == 1) {
        basic.showArrow(ArrowNames.East)
        if (points >= 10) {
            basic.pause(2000)
            basic.pause(2000)
        } else if (points >= 20) {
            basic.pause(2000)
            basic.pause(1000)
        } else if (points >= 30) {
            basic.pause(2000)
        } else if (points >= 40) {
            basic.pause(1000)
        } else {
            basic.pause(5000)
        }
    } else if (arrow == 2) {
        basic.showArrow(ArrowNames.West)
        if (points >= 10) {
            basic.pause(2000)
            basic.pause(2000)
        } else if (points >= 20) {
            basic.pause(2000)
            basic.pause(1000)
        } else if (points >= 30) {
            basic.pause(2000)
        } else if (points >= 40) {
            basic.pause(1000)
        } else {
            basic.pause(5000)
        }
    } else if (arrow == 3) {
        basic.showArrow(ArrowNames.South)
        if (points >= 10) {
            basic.pause(2000)
            basic.pause(2000)
        } else if (points >= 20) {
            basic.pause(2000)
            basic.pause(1000)
        } else if (points >= 30) {
            basic.pause(2000)
        } else if (points >= 40) {
            basic.pause(1000)
        } else {
            basic.pause(5000)
        }
    } else {
        basic.showArrow(ArrowNames.North)
        if (points >= 10) {
            basic.pause(2000)
            basic.pause(2000)
        } else if (points >= 20) {
            basic.pause(2000)
            basic.pause(1000)
        } else if (points >= 30) {
            basic.pause(2000)
        } else if (points >= 40) {
            basic.pause(1000)
        } else {
            basic.pause(5000)
        }
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
        basic.clearScreen()
        basic.showString("game over")
        basic.showString("score")
        basic.showString("" + (points))
        basic.showString("high score")
        basic.showString("" + (high_score))
        points = 0
        lives = 3
    }
    if (points > high_score) {
        high_score = points
    }
})
