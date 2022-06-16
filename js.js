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
        console.log(`${nwd}, ${r}, ${s}, ${q}, ${x}, ${y}`);
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

function nwdFunction(x, y) {
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
    var wynik = a * b / nwdFunction(a, b);
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
        sprawdz = nwdFunction(i, n);
        if (sprawdz == 1)
        {
            //document.getElementById("euler_wynik").innerHTML += `nwd: ${sprawdz}(${i}, ${n}), `
            ++wynik; 
        }
    } 
    document.getElementById("euler_wynik").innerHTML += `<br>wynik: ${wynik}`
}

function expModulo(a, b, c)
{
    document.getElementById("expModulo_wynik").innerHTML = ``
    if (b == 1)
        document.getElementById("expModulo_wynik").innerHTML += `wynik: ${a%c}`
    else
    {
        var power = 1, i = 0
        var arr = new Array()
        while(power < b)
        {
            arr.push(power) 
            power *= 2
            i++
        }
        console.table(arr)

        // for(let j = 0; j < i; j++)
        //     document.getElementById("expModulo_wynik").innerHTML += `${a}^${arr[j]} mod ${c} = ${Math.pow(a, arr[j])%c}<br>`
  
        
        var holder = b
        var arr2 = new Array()
        for(let j = i-1; j >= 0; j--)
        {
            if(holder >= arr[j])
            {
                holder -= arr[j]
                arr2.push(arr[j])
            }
            else
            {
                arr2.push(-1)
            }
        }
        console.table(arr2)
        arr2.reverse()
        console.table(arr2)

        var holder = parseInt(a), sum = 1
        for(let j = 0; j < i; j++)
        {
            if(arr[j] == 1)
            {
                document.getElementById("expModulo_wynik").innerHTML += `${a}^${arr[j]} mod ${c} = ${holder}<br>`
                sum *= holder
                console.log(`${holder}, ${sum}`)
            }
            else
            {
                document.getElementById("expModulo_wynik").innerHTML += `${a}^${arr[j]} mod ${c} = ${holder}*${holder} mod ${c} = ${holder*holder} mod ${c} = ${holder*holder%c} <br>`
                holder = holder*holder%c
                if(arr[j] == arr2[j])
                {
                    sum *= holder
                    console.log(`${holder}, ${sum}`)
                }
            }
        }
        for(let j = 0; j < i; j++)
        {
            if(arr[j] == arr2[j])
                document.getElementById("expModulo_wynik").innerHTML += `* ${a}^${arr2[j]}`

        }
        document.getElementById("expModulo_wynik").innerHTML += ` = ${sum}<br>`
        //if(sum > c)
        document.getElementById("expModulo_wynik").innerHTML += `${sum} mod ${c} = ${sum%c}<br>`
    }
}

function rsa(p, q, m)
{
    document.getElementById("rsa_wynik").innerHTML = ``
    var n = p*q
    var phi = (p-1)*(q-1)
    var bool = false
    while(!bool)
    {
        console.log("while")
        var e = Math.round(Math.random()*(n-2)+2)
        if(nwdFunction(e, phi) == 1 /*&& e%(p-1) != 0 && e%(q-1) != 0*/)
            bool = true
    }
    document.getElementById("rsa_wynik").innerHTML += `e = ${e}`
    const [rsanwd, dconst, rsas, rsai] = rozszerzonyEklidesRekurencja(e, phi);
    var d = dconst
    if(d < 0)
        d += phi
    document.getElementById("rsa_wynik").innerHTML += `, d = ${d}<br>klucz publiczny(${e}, ${n}), klucz prywatny(${d}, ${n})<br>`
    var cSzyfrowane = Math.pow(m, e)%n
    expModulo(m, e, n)
    var cDeszyfrowane = Math.pow(cSzyfrowane, d)%n
    document.getElementById("rsa_wynik").innerHTML += `Po zaszyfrowaniu c = ${cSzyfrowane} oraz po zdeszyfrowaniu ${cDeszyfrowane}`
}

function Ersa(p, q, m, e)
{
    document.getElementById("Ersa_wynik").innerHTML = ``
    var n = p*q
    var phi = (p-1)*(q-1)
    // document.getElementById("rsa_wynik").innerHTML += `e = ${e}`
    const [ersanwd, dconst, ersas, ersai] = rozszerzonyEklidesRekurencja(e, phi);
    var d = dconst
    if(d < 0)
        d += phi
    document.getElementById("Ersa_wynik").innerHTML += `d = ${d}<br>klucz publiczny(${e}, ${n}), klucz prywatny(${d}, ${n})<br>`
    var cSzyfrowane = Math.pow(m, e)%n
    expModulo(m, e, n)
    var cDeszyfrowane = Math.pow(cSzyfrowane, d)%n
    document.getElementById("Ersa_wynik").innerHTML += `Po zaszyfrowaniu c = ${cSzyfrowane} oraz po zdeszyfrowaniu ${cDeszyfrowane}`
}


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}