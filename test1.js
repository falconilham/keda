// soal 1
function fishBash(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("fish bash");
        } else if (i % 3 === 0) {
            console.log("fish");
        } else {
            console.log(i);
        }
    }
}

// soal 2
function ascendingSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function descendingSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[j] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


// soal 3
function soal3(str) {
    const forbiddenWord = /[^A-Za-z0-9]/g;
    const loweredStr = str.toLowerCase().replace(forbiddenWord, "");
    const reversedStr = loweredStr.split().reverse().join() === str
    return reversedStr
}