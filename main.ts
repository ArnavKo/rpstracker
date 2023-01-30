function updateScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + rounds)
}
input.onButtonPressed(Button.A, function () {
    PA += 1
    rounds += 1
})
input.onButtonPressed(Button.AB, function () {
    ties += 1
    rounds += 1
})
input.onButtonPressed(Button.B, function () {
    PB += 1
    rounds += 1
})
input.onGesture(Gesture.Shake, function () {
	
})
let ties = 0
let rounds = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Shall we play?")
PA = 0
PB = 0
rounds = 0
ties = 0
basic.pause(2000)
updateScoreboard()
basic.forever(function () {
	
})
