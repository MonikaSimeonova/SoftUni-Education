function solve (band, album, song){

    let songDuration = (album.length * band.length) * song.length / 2

    let plateRotation = songDuration / 2.5

    console.log(`The plate was rotated ${Math.ceil(plateRotation)} times.`)
}

solve('Black Sabbath', 'Paranoid', 'War Pigs')

/*Write a function, which as input will receive 3 parameters (strings)
· The first string is the name of the band
· The second string is the name of the album
· The third is holding a song name from the album
You have to find out how many times the plate will rotate the given song from the album.*/