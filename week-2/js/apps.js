var sBrowser, sUsrAg = navigator.userAgent;

if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
}

alert("You are using: " + sBrowser);

function getBrowserId () {

    var
        aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx

}

console.log(getBrowserId());
