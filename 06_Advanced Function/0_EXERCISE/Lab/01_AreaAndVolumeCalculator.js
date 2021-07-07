function solve(area, volume, inputString) {
    let coordinates = JSON.parse(inputString);
    function calculate(object) {
        let areaObject = Math.abs(area.call(object));
        let volumeObject = Math.abs(volume.call(object));
        return { area: areaObject, volume: volumeObject }
    }
    return coordinates.map(calculate);
}
solve(area(), vol(), area, vol, area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');
function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
