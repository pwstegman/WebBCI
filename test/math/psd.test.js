const reqlib = require('app-root-path').require;
const bci = reqlib('index.js');

const assert = require('assert');
const arrayAlmostEqual = reqlib('/test/util/arrayAlmostEqual.js');

describe('psd', function(){
    it('Computes the power spectral density of a signal', function(){
        var psd = bci.psd([1,2,1,2,5,2,1,2], {truncate: true});
        assert(arrayAlmostEqual(psd, [16, 4, 4, 4]));

        psd = bci.psd([1,2,3,4], {fftSize: 2});
        assert(arrayAlmostEqual(psd, [3, 1]));

        psd = bci.psd([1,2,3,4], {fftSize: 2, truncate: true});
        assert(arrayAlmostEqual(psd, [3]));
    });
});