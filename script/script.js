var a = 5, b = 5;
// piramideLeftButton(a);
// piramideLeftTop(b);
// piramideRigthButtom(a);
// piramideRigthTop(a);
// piramideSuperiorDoble(a);
// piramideInferiorDoble(a);
function piramideLeftButton(x) {
    for (let i = 0; i < x; i++) {
        let p = "";
        for (let j = 0; j < (i + 1); j++) {
            p = p + "*  ";
        }
        console.log(p);
    }
}
function piramideLeftTop(x) {
    for (let i = 0; i < x; i++) {
        let p = "";
        for (let j = 0; j < (x - i); j++) {
            p = p + "*  ";
        }
        console.log(p);
    }
}
function piramideRigthButtom(x) {
    for (let i = 0; i < x; i++) {
        let p = "";
        for (let j = 0; j < (x - i - 1); j++) {
            p = p + "   ";
        }
        for (let j = 0; j < (i + 1); j++) {
            p = p + "*  ";
        }
        console.log(p);
    }
}
function piramideRigthTop(x) {
    for (let i = 0; i < x; i++) {
        let p = "";
        for (let j = 1; j < (i + 1); j++) {
            p = p + "   ";
        }
        for (let j = 0; j < (x - i); j++) {
            p = p + "*  ";
        }
        console.log(p);
    }
}
function piramideSuperiorDoble(x) {
    for (let i = 0; i < x; i++) {
        let p = "";
        for (let j = 0; j < (x - i - 1); j++) {
            p = p + "   ";
        }
        for (let j = 0; j < (i + 1); j++) {
            p = p + "*  ";
        }
        for (let j = 1; j < (i + 1); j++) {
            p = p + "*  ";
        }
        console.log(p);
    }
}
function piramideInferiorDoble(x) {
    for (let i = 0; i < x; i++) {
        let p = "";
        for (let j = 1; j < (i + 1); j++) {
            p = p + "   ";
        }
        for (let j = 0; j < (x - i); j++) {
            p = p + "*  ";
        }
        for (let j = 0; j < (x - i - 1); j++) {
            p = p + "*  ";
        }
        console.log(p);
    }
}