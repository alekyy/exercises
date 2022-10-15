function typingTime(digits, num) {
    const value = num.toString();
    const digitsArray = digits.split('');
    let milliSecs = 0;

    for (let i = 0; i < value.length; i++) {
        const index = digitsArray.findIndex(x => x == value[i]);

        if (i === 0) {
            milliSecs += index;
        } else {
            const lastIndex = digitsArray.findIndex(x => x == value[i - 1]);
            milliSecs += lastIndex - index;
        }
    }

    return milliSecs;
}

console.log(typingTime('0123456789', 210))