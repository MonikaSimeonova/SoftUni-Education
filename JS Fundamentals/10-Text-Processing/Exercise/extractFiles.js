function extractFile(path){

    const directories = path.split('\\');
    const file = directories.pop();
    const lastComa = file.lastIndexOf('.');
    const name = file.substring(0, lastComa);
    const extension = file.substring(lastComa+1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx')