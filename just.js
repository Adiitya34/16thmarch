const readline = require('readline');



rl.question("Enter a string: ", (str) => {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') { // Uppercase to lowercase
            ans += str[i].toLowerCase();
        } else { // Lowercase to uppercase
            ans += str[i].toUpperCase();
        }
    }

    console.log("Modified string:", ans);
    rl.close();
});
