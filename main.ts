radio.onReceivedNumber(function (receivedNumber) {
    force = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    basic.showNumber(Math.abs(force))
    basic.pause(1000)
})
let force = 0
radio.setGroup(1)
radio.setTransmitPower(6)
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    # . . . #
    . # # # .
    `)
