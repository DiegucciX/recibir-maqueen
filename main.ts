radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else if (receivedNumber == 2) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorStop(maqueen.Motors.M2)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
radio.setGroup(99)
