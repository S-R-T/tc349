var Hello, sUsrAg = navigator.userAgent;

if(sUsrAg.indexOf("Chrome") > -1) {
    Hello = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    Hello = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    Hello = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    Hello = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    Hello = "Microsoft Internet Explorer";
}

alert("You are using: " + Hello);
