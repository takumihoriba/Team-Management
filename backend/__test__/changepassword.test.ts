import assert from 'assert';
import * as cp from '../changepassword';

test('lower case', () => {
    assert(!cp.checkLower('ABCD', true));
    assert(cp.checkLower('abcDDk8*', true));
    assert(cp.checkLower('abcDDk8*', false));
    assert(!cp.checkLower('', true));
});

test('upper case', () => {
    assert(!cp.checkUpper('abcd', true));
    assert(cp.checkUpper('abcDDk8*', true));
    assert(cp.checkUpper('abcDDk8*', false));
    assert(!cp.checkUpper('', true));
});

test('min length', () => {
    assert(!cp.checkMinLength('abcd', 5));
    assert(cp.checkMinLength('abcd', 4));
    assert(cp.checkMinLength('abcd', 3));
});

test('digit', () => {
    assert(cp.checkDigit('abcd', false));
    assert(!cp.checkDigit('abcd', true));
    assert(cp.checkDigit('abc3d', true));
    assert(cp.checkDigit('333', true));
});

test('special', ()=> {
    assert(cp.checkSpecial('@', true));
    assert(cp.checkSpecial('7777', false));
    assert(cp.checkSpecial('abc&k', true));
    assert(!cp.checkSpecial('#', true));
    
})