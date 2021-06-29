export const testMe = function (name) {
    return `testing on the window is so fun with ${name}!`;
};

window.testMe = testMe;