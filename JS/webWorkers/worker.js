onmessage = function(e) {
    wait(4000)
    postMessage(e.data);
}

importScripts('https://maeyler.github.io/Kuran/code/model.js'); /* You can import scripts from other origins */
postMessage(sName[1])


function wait(ms) {
    let d = new Date();
    let d2 = null;
    do { d2 = new Date(); }
    while (d2 - d < ms);
}