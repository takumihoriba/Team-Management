export function checkMinLength(pass: string, minLength: number) {
    return pass.length >= minLength;
}

export function checkLower(pass: string, lower: boolean) {
    if (!lower)
        return true;
    const pattern = /^(?=.*[a-z])/;
    return pattern.test(pass);
}

export function checkUpper(pass: string, upper: boolean) {
    if (!upper)
        return true;
    const pattern = /^(?=.*[A-Z])/;
    return pattern.test(pass);
}

export function checkDigit(pass: string, digit: boolean) {
    if (!digit)
        return true;
    const pattern = /^(?=.*\d)/;
    return pattern.test(pass);
}

export function checkSpecial(pass: string, special: boolean) {
    if (!special)
        return true;
    const pattern = /^(?=.*[@$!%*?&])/;
    return pattern.test(pass);
}

export function validatePassword(pass: string, minLength: number, lower: boolean, upper: boolean, digit: boolean, special: boolean): boolean{
    return checkMinLength(pass, minLength) && checkLower(pass, lower) && checkUpper(pass, upper)
            && checkDigit(pass, digit) && checkSpecial(pass, special);
}