let pattern = /^[^A]{6,}$/i;
console.log(pattern.test("Wonderful"));
console.log(pattern.test("Joyful"));
console.log(pattern.test("Happiness"));
console.log(pattern.test("Time"));
console.log(pattern.test("Task"));
console.log(pattern.test("Apple"));