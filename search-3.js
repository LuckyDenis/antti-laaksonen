'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function readLine() {
    return new Promise((resolve, reject) => {
        rl.on('line', (line) => {
            resolve(line)
        });
    });
}


function placementQueen(n, y, count, col, mainDiag, sideDiag){
    if(y === n){
        count[0]++;
        return;
    }
    for(let x = 0; x < n; x++){
        if(col[x] || mainDiag[x + y] || sideDiag[x - y + n - 1]){
            continue;
        }
        col[x] = mainDiag[x + y] = sideDiag[x - y + n - 1] = true;
        placementQueen(n, y + 1, count, col, mainDiag, sideDiag);
        col[x] = mainDiag[x + y] = sideDiag[x - y + n - 1] = false;
    }
}

async function main(){
    const n = parseInt(await readLine().finally());
    const count = [0];
    placementQueen(
        n, 0, count, Array(n), Array(n), Array(n)
    )
    console.log(count[0]);
    process.exit();
}

main().finally()
