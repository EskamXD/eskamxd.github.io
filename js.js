var random_global

function fun(operation)
{
    var global = ''
    //var random_global

    if (operation === 'gen')
    {
        document.getElementById('final_result').innerHTML = ""
        document.getElementById('user_answer').value = ""
        let x = document.getElementById('system_in_input').value
        let y = document.getElementById('system_out_input').value
        let range = document.getElementById('range').value

        if (range >= 10 && range <= 1000)
        {
            let array = new Array
            let i = 0
            let random = Math.floor(Math.random() * (range - 9) + 10)
            random_global = random
            //console.log(random)
            do
            {
                array[i] = random % x
                random = Math.floor(random/x)
                i++
            } while (random > 0)
            //console.table(array)

            for(let j = array.length-1; j >= 0; j--)
            {
                
                if (array[j] > 9)
                {
                    global += String.fromCharCode(array[j] + 55)
                }
                else global += array[j]
            }
            document.getElementById('generated_number').innerHTML = global
        }
    }
    if (operation ==='che')
    {
        let y = document.getElementById('system_out_input').value
        //console.log(y)

        let holder = document.getElementById('user_answer').value
        let chars = holder.split('')
        let array = new Array
        let array_compare = new Array
        //console.table(chars)

        for (let j = 0; j < chars.length ; j++)
        {
            if (chars[j].charCodeAt(0) >= 65 && chars[j].charCodeAt(0) <= 70) array[j] = chars[j].charCodeAt(0) - 55
            else array[j] = chars[j].charCodeAt(0) - 48
        }
        array.reverse()
        //console.table(array)
        let i = 0
        var random = random_global
        //var random = document.getElementById('generated_number').value
        //console.log(random)
        do
        {
            //console.log(i)
            array_compare[i] = random % y
            random = Math.floor(random/y)
            i++
        } while (random > 0)

        //console.table(array_compare)

        let k = 0
        if (array.length < array_compare.length) k = array.length
        else k = array_compare.length

        var bool = true
        for (let j = 0; j < k ; j++)
        {
            //console.log('for')
            //console.log(array_compare[j]+' '+array[j])
            if (array_compare[j] != array[j])
            {
                //console.log(array_compare[j]+'true')
                bool = false
            }
        }

        if (bool == true) document.getElementById('final_result').innerHTML = "Dobrze"
        else document.getElementById('final_result').innerHTML = "Źle"
    }
}