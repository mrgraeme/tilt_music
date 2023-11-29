input.onButtonPressed(Button.A, function () {
    delay = delay * 0.9
})
input.onButtonPressed(Button.B, function () {
    delay = delay * 1.1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (playing) {
        playing = false
    } else {
        playing = true
    }
})
let sprite: game.LedSprite = null
let hz = 0
let playing = false
let delay = 0
music.setVolume(100)
delay = 100
let base_hz = 440
basic.forever(function () {
    hz = base_hz + input.rotation(Rotation.Roll) * 2
    if (playing) {
        music.ringTone(hz)
        sprite = game.createSprite(randint(0, 5), randint(0, 5))
        serial.writeValue("delay", delay)
        serial.writeValue("hz", hz)
        basic.pause(delay)
        sprite.delete()
    }
    basic.pause(delay)
    music.stopAllSounds()
})
