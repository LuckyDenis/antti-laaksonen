'use strict';


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function readLine(){
    return new Promise((resolve, reject) => {
        rl.on('line', (line) => resolve(line));
    });
}

function comb(n, is_view, permutation){
    if(permutation.length === n){
        console.log(...permutation);
    }else{
        for(let i = 1; i <= n; i++){
            if(is_view[i]){
                continue;
            }
            is_view[i] = true;
            permutation.push(i);
            comb(n, is_view, permutation);

            is_view[i] = false;
            permutation.pop()
        }
    }
}



async function main(){
    const n = parseInt(await readLine().finally());
    const is_view = Array(n + 1);
    const permutation = [];
    comb(n, is_view, permutation);
    process.exit(0);
}

main().finally();
