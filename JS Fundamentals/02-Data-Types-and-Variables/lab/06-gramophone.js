function solve (band, album, song){

    let songDuration = (album.length * band.length) * song.length / 2

    let plateRotation = songDuration / 2.5

    console.log(`The plate was rotated ${Math.ceil(plateRotation)} times.`)
}

solve('Black Sabbath', 'Paranoid', 'War Pigs')
