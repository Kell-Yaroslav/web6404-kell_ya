// Если число целое, то при побитовом "ИЛИ с 0" оно не изменится.
function isInteger(n) {
    if (typeof n !== 'number') return false;
    return (n | 0) === n; 
}

// 2. Просто цикл с шагом 2.
function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

// 3. Обычный цикл суммы.
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 4. Рекурсия.
function recSumTo(n) {
    if (n <= 1) return n;
    return n + recSumTo(n - 1);
}

// 5. Факториал.
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 6. Проверка на степень двойки.
function isBinary(n) {
    if (n <= 0 || typeof n !== 'number') return false;
    while (n > 1) {
        if (n % 2 !== 0) return false; // если есть остаток — это не степень двойки
        n = n / 2;
    }
    return true;
}


// 7. Числа Фибоначчи
function fibonacci(n) {
    // Отсекаем не-числа, NaN и отрицательные значения
    if (typeof n !== 'number' || isNaN(n) || n < 0) {
        return undefined;
    }
    
    if (n <= 1) return n;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}

// 8. Замыкание (функция возвращает другую функцию).
function getOperationFn(initialValue, operatorFn) {
    return function(newValue) {
        if (operatorFn) {
            initialValue = operatorFn(initialValue, newValue);
        }
        return initialValue;
    };
}

// 9. Генератор последовательности (тоже замыкание).
function sequence(start = 0, step = 1) {
    let current = start;
    return function() {
        let result = current;
        current += step;
        return result;
    };
}

// 10. Глубокое сравнение объектов (рекурсивно).
function deepEqual(a, b) {
    // 1. Проверка на строгое равенство
    if (a === b) return true;

    // 2. Проверка на NaN (потому что NaN !== NaN)
    if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
        return true;
    }

    // 3. Если один из них не объект или равен null — они не равны
    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
        return false;
    }

    // 4. Проверяем массивы (у массивов Object.keys не всегда работает как надо)
    const isArrayA = Array.isArray(a);
    const isArrayB = Array.isArray(b);
    if (isArrayA !== isArrayB) return false;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};