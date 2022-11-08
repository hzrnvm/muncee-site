var prime = n => {
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

var trian = n => n < 0 ? false : !!Number.isInteger(Math.sqrt(2*n + 1/4) - 1/2);

var square = n => n < 0 ? false : !!(Math.floor(Math.sqrt(n)) == Math.sqrt(n));

var cube = n => !(Math.floor(Math.cbrt(n)) == Math.cbrt(n));

var evil = n => n < 0 ? false : (n.toString(2).match(/1/g) || []).length % 2 == 0;

var poweroftwo = n => n.toString(2).split("").filter(x => x == 1).length == 1 && true;

var ds = (n, e = 1) => Array.from(Math.abs(n).toString()).map(element => parseInt(element)).reduce((p, c) => p + c**e, 0);

var gcd = (a, b) => !b ? a: gcd(b, a % b);

var σ = n => n < 1 ? false : [...Array(n + 1).keys()].slice(1).reduce((p, c) => p + (!(n % c) && c), 0);

var φ = n => n < 1 ? false : [...Array(n + 1).keys()].slice(1).reduce((p, c) => p + (gcd(n, c) == 1 && 1), 0);

var π = n => n < 1 ? 0 : [...Array(n + 1).keys()].slice(1).reduce((p, c) => p + (prime(c) && 1), 0);

var dap = n => n < 1 ? false : σ(n) < n*2 ? "deficient" : σ(n) > n*2 ? "abundant" : "perfect";

var prevprime = n => n < 3 ? false : Array(n / 2).fill(n).map((x, y) => x - y).find(prime);

var nextprime = n => n < 3 ? 2 : Array(2n).fill(n).map((x, y) => x + y).find(prime);

var palindromic = n => n < 0 ? false : n.toString() == n.toString().split("").reverse().join("");

var powerful = n => n < 1 ? false : Array(Math.floor(Math.sqrt(n))).fill(1).map((x, y) => x + y).some(i => Number.isInteger(Math.cbrt(n / i**2)));

var So2s = n => {
    if (square(n) || square(n + 1)) {return true};
    for (let i = 2; i^2 > n; i++) {
        for (var count = 0; n % i != 0; count++) {n = Math.floor(n / i)};
        if (i % 4 == 3 && count % 2 != 0) {return false};
    };
    return n % 4 != 3;
}

var happy = n => {
    let slow = n;
    let fast = n;

    while (true) {
        slow = ds(slow, 2);
        fast = ds(ds(fast, 2), 2);
        if (slow != fast) continue; else return slow == 1;
    }
}

var digiroot = n => {
    for (var f = ds(n); f > 9; f = ds(f));
    return f;
}

var smoothies = (n, flavor) => {
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

var b100 = n => {
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

var b1000 = n => {
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

var b2048 = n => {
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

function numana(nn) {
    //if the input isn't an integer, stop.
    try {var num = parseInt(nn)}
    catch(err) {return "We want a number."}

    //dictionaries
    const bood = {};
    
    //bood
    bood.prm = prime(num);
    bood.tri = trian(num);
    bood.sqr = square(num);
    bood.cub = cube(num); //negative ok
    bood.so2 = So2s(num);
    bood.bin = num.toString(2); //negative ok
    bood.evl = evil(num);
    bood.pot = poweroftwo(num);
    bood.mrs = poweroftwo(num + 1);
    bood.reg = regular(num);
    bood.hum = humble(num);
    bood.unu = unusual(num);
    bood.pow = powerful(num);
    bood.dap = dap(num);
    bood.ach = pow && dap != "perfect";
    bood.dig = Math.abs(num).toString().length;
    bood.dgr = digiroot(num); //negative ok
    bood.hap = happy(num); //negative ok
    bood.pal = palindromic(num);
    bood.saf = num < 5 ? false : prm && prime((num - 1) / 2) ? true : false;
    bood.sph = num < 2 ? false : prm && prime((2 * num) + 1) ? true : false;
    bood.sig = σ(num);
    bood.tot = φ(num);
    bood.ppi = π(num);
    
    const bin = `${num} in binary is ${bood.bin}`;
    const prm = prm ? `${num} is prime.` : num < 1 ? '' : num == 1 ? `${num} is neither prime nor composite.` : `${num} is composite.`;
    const tri = tri ? `${num} is triangular.` : `${num} is not triangular.`;
    const sqr = sqr ? `${num} is a square number.` : `${num} is not a square number.`;
    const cub = cub ? `${num} is a cube number.` : `${num} is not a cube number.`;
    const so2 = so2 ? `${num} can be represented by the sum of 2 squares.` : `${num} cannot be represented by the sum of 2 squares.`
    const evl = evl ? `${num} is evil.` : `${num} is odious.`;
    const pot = pot ? `${num} is a power of 2.` : `${num} is polite`;
    const mrs = mrs && prm ? `${num} is a Mersenne prime.` : mrs ? `${num} is a Mersenne number.` : `${num} is not a Mersenne number.`
    const reg = reg ? `${num} is regular.` : `${num} is not regular.`;
    const hum = hum ? `${num} is humble.` : `${num} is not humble.`;
    const unu = unu ? `${num} is unusual.` : `${num} is not unusual.`;
    const pow = pow ? `${num} is powerful.` : `${num} is not powerful.`;
    const dap = dap == "deficient" ? `${num} is deficient.` : dap == "abundant" ? `${num} is abundant.` : dap == "perfect" ? `${num} is perfect.` : `${num} is a negative.`;
    const ach = ach ? `${num} is an Achilles number.` : `${num} is not an Achilles number.`;
    const dig = dig == 1 ? `${num} has 1 digit.` : `${num} has ${dig} digits.`;
    const dgr = `The digital root of ${num} is ${dgr}.`;
    const hap = hap ? `${num} is happy.` : `${num} is sad.`;
    const pal = pal ? `${num} is palindromic.` : `${num} is not palindromic.`;
    const saf = saf ? `${num} is a safe prime` : `${num} is not a safe prime`;
    const sph = sph ? `${num} is a Sophie Germain prime` : `${num} is not a Sophie Germain prime`
    const sig = sig ? `The Divisor Function of ${num} is ${sig}` : "";
    const tot = tot ? `The Euler Totient of ${num} is ${tot}` : "";
    const ppi = `There are ${ppi} primes below ${num}.`
    const pnp = num < 3 ? `The prime after ${num} is 3` : `The prime before ${num} is ${prevprime(num)}, and the prime after ${num} is ${nextprime(num)}`

    return `${dig}
        ${prm}
        ${bin}
        ${num} in base 100 is ${b100(num)}.
        ${num} in base 1000 is ${b1000(num)}.
        ${num} in base 2048 is ${b2048(num)}.
        ${pot}${saf}${sph}${mrsprm}
        ${so2}
        ${evl}
        ${hap}
        ${sig}
        ${tot}
        ${ppi}
        ${pnp}
        ${pal}
        ${tri}
        ${sqr}
        ${cub}
        ${pow}
        ${ppo}
        ${ach}
        ${abu}
        ${def}
        ${per}
        ${reg}
        ${hum}
        ${unu}
        ${dgr}`;
}