function euklides(x, y) {
    document.getElementById("euklides_wynik").innerHTML = ``;


    var i = 1;
    if (x % y == 0) {
        document.getElementById("euklides_wynik").innerHTML = `(${i}) ${x}= ${parseInt(x / y)} * ${y} + ${(x % y)}`;
    } else {
        while (x % y != 0) {
            var xStare = x;
            var yStare = y;
            y = x % yStare;
            x = yStare;
            document.getElementById("euklides_wynik").innerHTML += `(${i}) ${xStare} = ${parseInt(xStare / yStare)} * ${yStare} + ${(xStare % yStare)}<br>`;
            i++;
        }
    }
    document.getElementById("euklides_wynik").innerHTML += `<br>wynik: ${y}`;
    return y;
}



function rozszerzonyEuklides(x, y, c) {
    document.getElementById("rozszerzonyEuklides_wynik").innerHTML = "";
    const [nwd, r, s, i] = rozszerzonyEklidesRekurencja(x, y);
    document.getElementById("rozszerzonyEuklides_wynik").innerHTML += `<br>[${nwd}, ${r}, ${s}]<br> ${s}*${y} + ${r}*${x} = ${nwd}`;
    if(c%nwd == 0)
    {
        var n = c/nwd
        document.getElementById("rozszerzonyEuklides_wynik").innerHTML += `<br>{x = ${r*n} + t*(${y/nwd})<br>{y = ${s*n} - t*(${x/nwd})`;
    }
    return;
}

function rozszerzonyEklidesRekurencja(x, y) {
    if (x % y == 0) {
        //document.getElementById("rozszerzonyEuklides_wynik").innerHTML = `(${i}) ${x}= ${parseInt(x / y)} * ${y} + ${(x % y)}`;
        return [y, 0, 1, 1]
    } else {
        var q = parseInt(x / y);
        const [nwd, r, s, i] = rozszerzonyEklidesRekurencja(y, x % y);
        // console.log(`${nwd}, ${r}, ${s}, ${q}, ${x}, ${y}`);
        document.getElementById("rozszerzonyEuklides_wynik").innerHTML += `(${i}) ${r-q*s}*${y} + ${s}*${x}<br>`;
        return [nwd, s, r - q * s, i + 1];
    }

}


function sito(n) {
    document.getElementById("sito_wynik").innerHTML = "";
    var skr = [],
        i,
        j;
    if (n < 2)
        document.getElementById("sito_wynik").innerHTML += `Brak liczb pierwszych w podanym zakresie`;
    else {
        for (i = 2; i <= n; i++) skr[i] = false;
        i = 2;
        do {
            if (!skr[i]) {
                j = i * i;
                while (j <= n) {
                    skr[j] = true;
                    j += i;
                }
            }
            i++;
        } while (i * i <= n);
        for (i = 2; i <= n; i++)
            if (!skr[i]) document.getElementById("sito_wynik").innerHTML += `${i}, `;
    }
}

function nwd(x, y) {
    //console.log("nww");
    if (x % y == 0) {
        return y;
    } else {
        while (x % y != 0) {
            var xStare = x;
            var yStare = y;
            y = x % yStare;
            x = yStare;
        }
    }
    return y;
}

function nww(a, b) {
    document.getElementById("nww_wynik").innerHTML = ``;
    var wynik = a * b / nwd(a, b);
    document.getElementById("nww_wynik").innerHTML += `${wynik}`;
}

function chinczyk(a1, a2, a3, b1, b2, b3)
{
    console.log(b3)
    var n1 = 1, n2 = 1, n3 = 1
    if(a3 == null || b3 == null)
        a3 = b3 = 1
    console.log(b3)
    document.getElementById("chinczyk_wynik").innerHTML = ``
    n1 = b2*b3, n2 = b1*b3, n3 = b1*b2
    document.getElementById("chinczyk_wynik").innerHTML += `(N1) = ${b2} * ${b3} = ${n1} <br>`
    document.getElementById("chinczyk_wynik").innerHTML += `(N2) = ${b1} * ${b3} = ${n2} <br>`
    document.getElementById("chinczyk_wynik").innerHTML += `(N3) = ${b1} * ${b2} = ${n3} <br>`
    const [nwd1, r1, s1] = rozszerzonyEklidesRekurencja(n1, b1), [nwd2, r2, s2] = rozszerzonyEklidesRekurencja(n2, b2), [nwd3, r3, s3] = rozszerzonyEklidesRekurencja(n3, b3)
    var a = (n1*a1*r1+n2*a2*r2+n3*a3*r3)
    var b = (b1*b2*b3)
    document.getElementById("chinczyk_wynik").innerHTML += `Elementy odwrotne (N1) = ${r1}, (N2) = ${r2}, (N3) = ${r3}<br>`
    document.getElementById("chinczyk_wynik").innerHTML += `a = ${n1} * ${a1} * ${r1} + ${n2} * ${a2} * ${r2} + ${n3} * ${a3} * ${r3}<br>`
    document.getElementById("chinczyk_wynik").innerHTML += `x = ${a} mod ${b}`
}

function euler(n) 
{ 
    document.getElementById("euler_wynik").innerHTML = ``
    var wynik = 0
    for(var i=1; i < n; ++i)
    {
        sprawdz = nwd(i, n);
        if (sprawdz == 1)
        {
            //document.getElementById("euler_wynik").innerHTML += `nwd: ${sprawdz}(${i}, ${n}), `
            ++wynik; 
        }
    } 
    document.getElementById("euler_wynik").innerHTML += `<br>wynik: ${wynik}`
}