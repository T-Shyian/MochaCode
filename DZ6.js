function checkProb(count) {
        let evenCounter = 0;   //парні
        let min = 100;
        let max = 1000;
        for (let i = 0; i < count; i ++) {
            let num = Math.floor(Math.random()*(max - min + 1)) + min;
            console.log (num);
        if (num % 2 === 0){
            evenCounter ++;
            }
        }
        let oddCounter = count - evenCounter;   //непарні
        let evenPercent = (evenCounter / count * 100).toFixed(0);
        let oddPersent = (oddCounter / count * 100).toFixed(0);
console.log("Кількість згенерованих чисел: " + count);       
console.log("Парних чисел: " + evenCounter);       
console.log("Непарних чисел: " + oddCounter);
console.log("Відсоток парних до не парних: " + evenPercent + " до " + oddPersent);     
}
checkProb(5);
checkProb(9);
checkProb(25);
checkProb(100);