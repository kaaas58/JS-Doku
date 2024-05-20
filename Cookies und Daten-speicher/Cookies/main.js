"use strict";

// Sytax:
// document.cookie = "cookie_name=[cookie_wert][; max-age=zeit_im_s]"

document.cookie = "vorname=Ruben";
document.cookie = "nachname=Winkler";
document.cookie = `${encodeURIComponent("ein key;value-paare")}=${encodeURIComponent("key=value")}`;
document.cookie = "10s_cookie=; max-age=10";

setTimeout(() => console.log(document.cookie), 9000);
setTimeout(() => console.log(document.cookie), 11000);

document.cookie = `mein_alter=26; max-age=${60*60*24*365}`;


const set_cookie = function(name, wert, haltbarkeit) {
    let cookie = `${encodeURIComponent(name)}=`;
    if (wert) {
        cookie += `${encodeURIComponent(wert)}`;
    }
    if (haltbarkeit) {
        cookie += `; max-age=${haltbarkeit}`;
    }
    document.cookie = cookie;
};
set_cookie("passwort", "%A$g[}hm;§8", 60*60*2);
console.log(document.cookie);
















// document.cookie = "vorname=Lukas";
// document.cookie = "nachname=Trapp";
// document.cookie = `${encodeURIComponent("ein key;value-paar")}=${encodeURIComponent("key=vallue")}`;
// document.cookie = "10s_cookie=; max-age=10; path";
// setTimeout(() => console.log(document.cookie), 2000);
// setTimeout(() => console.log(document.cookie), 4000);
// document.cookie = `mein_alter=26; max-age=${60*60*24}`;

// const set_cookie = function(name, wert){
//     let cookie = `${encodeURIComponent(name)}=`;
//     if(wert){
//         cookie += `${encodeURIComponent(wert)}`;
//     }
//     document.cookie = cookie;
// };
// set_cookie("passwort", "%A$g[}hm;§8");


// // console.log(document.cookie);