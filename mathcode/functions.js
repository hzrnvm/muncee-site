prime = n => {
    if (n < 2) return false
    else if (n == 2 || n == 3) return true

    const l = parseInt(Math.sqrt(n));
    if (l == Math.sqrt(n)) return false;

    // go through all numbers bigger than 1 and less than the square root of the original number (because factors). If n is divisible by the current number k return 0 (composite). if k is equal to l (we searched through them all.) return 1 (prime).
    for(let k of Array(l - 1).fill(2).map((x, y) => x + y)) {
        if (!(n % k)) return false
        else if (k == l) return true
    }
}

trian = n => n < 0 ? false : !!Number.isInteger(Math.sqrt(2*n + 1/4) - 1/2);

square = n => n < 0 ? false : !!(Math.floor(Math.sqrt(n)) == Math.sqrt(n));

cube = n => !(Math.floor(Math.cbrt(n)) == Math.cbrt(n));

evil = n => n < 0 ? false : (n.toString(2).match(/1/g) || []).length % 2 == 0;

poweroftwo = n => n.toString(2).split("").filter(x => x == 1).length == 1 && true;

ds = (n, e = 1) => Array.from(Math.abs(n).toString()).map(element => parseInt(element)).reduce((p, c) => p + c**e, 0);

gcd = (a, b) => !b ? a: gcd(b, a % b);

σ = n => n < 1 ? false : [...Array(n + 1).keys()].slice(1).reduce((p, c) => p + (!(n % c) && c), 0);

φ = n => n < 1 ? false : [...Array(n + 1).keys()].slice(1).reduce((p, c) => p + (gcd(n, c) == 1 && 1), 0);

π = n => n < 1 ? 0 : [...Array(n + 1).keys()].slice(1).reduce((p, c) => p + (prime(c) && 1), 0);

dap = n => n < 1 ? false : σ(n) < n*2 ? "deficient" : σ(n) > n*2 ? "abundant" : "perfect";

prevprime = n => n < 3 ? false : Array(n / 2).fill(n).map((x, y) => x - y).find(prime);

nextprime = n => n < 3 ? 2 : Array(2n).fill(n).map((x, y) => x + y).find(prime);

palindromic = n => n < 0 ? false : n.toString() == n.toString().split("").reverse().join("");

powerful = n => n < 1 ? false : Array(Math.floor(Math.sqrt(n))).fill(1).map((x, y) => x + y).some(i => Number.isInteger(Math.cbrt(n / i**2)));

So2s = n => {
    if (square(n) || square(n + 1)) {return true};
    for (let i = 2; i^2 > n; i++) {
        for (var count = 0; n % i != 0; count++) {n = Math.floor(n / i)};
        if (i % 4 == 3 && count % 2 != 0) {return false};
    };
    return n % 4 != 3;
}

happy = n => {
    let slow = n;
    let fast = n;

    while (true) {
        slow = ds(slow, 2);
        fast = ds(ds(fast, 2), 2);
        if (slow != fast) continue; else return slow == 1;
    }
}

digiroot = n => {
    for (var f = ds(n); f > 9; f = ds(f));
    return f;
}

smoothies = (n, flavor) => {
    switch(flavor) {
        case 5:
            var kstartval = 7;
            check = j => !(n % j) && j % 2 && j % 3 && j % 5;
            break;
        case 7:
            var kstartval = 11;
            check = j => !(n % j) && j % 2 && j % 3 && j % 5 && j % 7;
            break;
        case 'Unusual':
            var kstartval = Math.floor(Math.sqrt(n) + 1);
            check = j => n % j && prime(j) % 2 == 1;
            break;
    }
    for(let k = kstartval; k <= n; k++) {if (check(k)) return false;}
    return true;
}

b100 = n => {
    const table = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'Γ', 'Δ', 'Θ', 'Λ', 'Ξ', 'Π', 'Σ', 'Φ', 'Ψ', 'Ω', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'π', 'ρ', 'σ', 'ς', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω', 'þ', 'ð', 'ɔ', 'ə'];
    n = n.toString()

    if (n.length < 3) return table[n];
    
    if (n.length % 2 == 1) {
        var f = n.charAt(0);
        var n = n.slice(1);
    }
    else var f = false;
    
    var twobit = '';
    var final = '';
    
    var i = 0;
    for (let k of n) {
        if (i % 2 == 0) twobit = k.toString();
        else {
            twobit += k.toString()
            final += table[parseInt(twobit)]
        }
        i++
    }

    return f ? f + final : final;
}

b1000 = n => {
    $.getJSON("base1000.json", function(table) {   
        var m = n.toString();
        
        if (m.length < 4) return table[m];
        
        if (m.length % 3 == 1) {
            var f = table[m.charAt(0)];
            var m = m.slice(1);
        }
        else if (m.length % 3 == 2) {
            var f = table[m.slice(0,1)];
            var m = m.slice(2);
        }
        else var f = false;
    
        var twobit = '';
        var final = '';
        
        var i = 0;
        for (let k of m) {
            twobit += k.toString();
            if (i % 3 == 2) {final += table[parseInt(twobit)]; twobit = ""};
            i++;
        }
    
        return f ? f + final : final;
    });
}

b2048 = n => {
    $.getJSON("base2048.json", function(table) {   
        if (n < 2048) return table[n];
        
        var bn = n.toString(2);
        while (bn.toString().length % 11 != 0) var bn = bn.padStart(bn.toString().length + 1, "0");
        
        var a = [];
        let match;
        do {
            match = /.{1,11}/g.exec(bn);
            if (match) a.push(match[0]);
        } while (match);
    
        a.forEach(k => {k = table[parseInt(k, 2)];});
    
        return a.join(" ");
    });
}