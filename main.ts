joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function () {
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
    joystickbit.Vibration_Motor(1000)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.up, function () {
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
    joystickbit.Vibration_Motor(1000)
})
input.onButtonPressed(Button.A, function () {
    stop = 1
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function () {
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
    joystickbit.Vibration_Motor(1000)
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(1000)
    stop = 0
})
function arrow_speed () {
    if (points <= 19 && points >= 10) {
        basic.pause(2000)
        basic.pause(2000)
    } else if (points <= 29 && points >= 20) {
        basic.pause(2000)
        basic.pause(1000)
    } else if (points <= 39 && points >= 30) {
        basic.pause(2000)
    } else if (points <= 49 && points >= 40) {
        basic.pause(1000)
    } else if (points >= 50) {
        basic.pause(500)
    } else {
        basic.pause(5000)
    }
}
input.onButtonPressed(Button.B, function () {
    stop = 1
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.up, function () {
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
    joystickbit.Vibration_Motor(1000)
})
let high_score = 0
let sonar = 0
let stop = 0
let points = 0
let arrow = 0
joystickbit.initJoystickBit()
OLED.init(128, 64)
let lives = 3
wuKong.setAllMotor(-100, -100)
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
    sonar = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (stop == 1) {
        wuKong.stopAllMotor()
    } else if (sonar < 20 && sonar > 1) {
        wuKong.setAllMotor(10, 100)
        basic.pause(500)
        basic.pause(200)
    } else {
        wuKong.setAllMotor(-100, -100)
    }
})
basic.forever(function () {
    if (lives == 0) {
        basic.clearScreen()
        basic.showString("game over")
        basic.clearScreen()
        basic.showString("score:" + points)
        lives = 3
        points = 0
    }
    if (points > high_score) {
        high_score = points
    }
})
