function sortArr(data, type) {


    return type === 'asc'
        ? data.sort((a, b) => a - b)
        : data.sort((a, b) => b - a)

}
sortArr([14, 7, 17, 6, 8], 'asc')