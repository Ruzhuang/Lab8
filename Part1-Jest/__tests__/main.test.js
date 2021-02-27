const formatVolumeIconPath = require('../assets/scripts/main');
console.log("here")
describe('The volumn is', () => {
    test('89 and the iconLevel should be 3 in the path ', () => {
        expect(formatVolumeIconPath(89)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });

    test('45 and the iconLevel should be 2 in the path ', () => {
        expect(formatVolumeIconPath(45)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });
    test('14 and the iconLevel should be 1 in the path ', () => {
        expect(formatVolumeIconPath(14)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });
    test('0 and the iconLevel should be 0 in the path ', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
});