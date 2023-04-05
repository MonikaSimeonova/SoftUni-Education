function areaVol(areaFunc, volFunc, shapes) {
    const data = JSON.parse(shapes);

    const result = [];

    for (const shape of data) {
        // const shape = data[0];
        const area = areaFunc.call(shape)
        const volume = volFunc.call(shape)

        const current = {
            area,
            volume
        }
        result.push(current)
    }

    return result;
}
function area() {
    return Math.abs(this.x * this.y);

}
function vol() {
    return Math.abs(this.x * this.y * this.z)
}
const s1 = `[
    {"x":"10","y":"-22","z":"10"},
        {"x":"47","y":"7","z":"-5"},
        {"x":"55","y":"8","z":"0"},
        {"x":"100","y":"100","z":"100"},
        {"x":"55","y":"80","z":"250"}
    ]`

areaVol(area, vol, s1)