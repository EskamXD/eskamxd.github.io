function euklides() {
    document.getElementById("euklides_wynik").innerHTML = ``;
    var x = document.getElementById("euklides_x").value;
    var y = document.getElementById("euklides_y").value;

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



function rozszerzonyEuklides(x, y) {
    document.getElementById("rozszerzonyEuklides_wynik").innerHTML = "";
    const [nwd, r, s, i] = rozszerzonyEklidesRekurencja(x, y);
    document.getElementById("rozszerzonyEuklides_wynik").innerHTML += `<br>[${nwd}, ${r}, ${s}]<br> ${s}*${y} + ${r}*${x} = ${nwd}`;
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