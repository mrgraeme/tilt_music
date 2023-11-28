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
let hz = 0
let playing = false
let delay = 0
music.setVolume(50)
delay = 100
let base_hz = 262
basic.forever(function () {
    hz = base_hz + (input.rotation(Rotation.Roll) + 0)
    serial.writeValue("delay", delay)
    serial.writeValue("hz", hz)
    if (playing) {
        music.ringTone(hz)
        basic.pause(delay)
    }
    music.stopAllSounds()
    basic.pause(delay)
})
