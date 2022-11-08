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