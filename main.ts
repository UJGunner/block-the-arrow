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
function arrow_speed () {
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
    reset()
})
function reset () {
    OLED.clear()
    OLED.writeStringNewLine("lives" + lives)
    OLED.newLine()
    OLED.writeStringNewLine("score" + points)
    OLED.newLine()
    OLED.writeStringNewLine("high score" + high_score)
    points = 0
    lives = 3
}
let high_score = 0
let lives = 0
let points = 0
let arrow = 0
OLED.init(128, 64)
reset()
basic.forever(function () {
    arrow = randint(1, 4)
    if (arrow == 1) {
        basic.showArrow(ArrowNames.East)
        arrow_speed()
    } else if (arrow == 2) {
        basic.showArrow(ArrowNames.West)
        arrow_speed()
    } else if (arrow == 3) {
        basic.showArrow(ArrowNames.South)
        arrow_speed()
    } else {
        basic.showArrow(ArrowNames.North)
        arrow_speed()
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
        basic.showString("game over")
        reset()
    }
    if (points > high_score) {
        high_score = points
    }
})
