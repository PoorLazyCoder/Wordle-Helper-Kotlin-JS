function searchBottonClick(fo) {

    let gn = ["", "", "", "", ""]; // green

    let y1 = ["", "", "", "", ""]; // yellow
    let y2 = ["", "", "", "", ""];
    let y3 = ["", "", "", "", ""];

    let g1 = ["", "", "", "", ""]; // gray
    let g2 = ["", "", "", "", ""];
    let g3 = ["", "", "", "", ""];


    gn[0] = fo.green1.value
    gn[1] = fo.green2.value
    gn[2] = fo.green3.value
    gn[3] = fo.green4.value
    gn[4] = fo.green5.value


    y1[0] = fo.yellowA1.value
    y1[1] = fo.yellowA2.value
    y1[2] = fo.yellowA3.value
    y1[3] = fo.yellowA4.value
    y1[4] = fo.yellowA5.value

    y2[0] = fo.yellowB1.value
    y2[1] = fo.yellowB2.value
    y2[2] = fo.yellowB3.value
    y2[3] = fo.yellowB4.value
    y2[4] = fo.yellowB5.value

    y3[0] = fo.yellowC1.value
    y3[1] = fo.yellowC2.value
    y3[2] = fo.yellowC3.value
    y3[3] = fo.yellowC4.value
    y3[4] = fo.yellowC5.value



    g1[0] = fo.grayA1.value
    g1[1] = fo.grayA2.value
    g1[2] = fo.grayA3.value
    g1[3] = fo.grayA4.value
    g1[4] = fo.grayA5.value

    g2[0] = fo.grayB1.value
    g2[1] = fo.grayB2.value
    g2[2] = fo.grayB3.value
    g2[3] = fo.grayB4.value
    g2[4] = fo.grayB5.value

    g3[0] = fo.grayC1.value
    g3[1] = fo.grayC2.value
    g3[2] = fo.grayC3.value
    g3[3] = fo.grayC4.value
    g3[4] = fo.grayC5.value



    removeNonLetterFromArray(gn)
    removeNonLetterFromArray(y1)
    removeNonLetterFromArray(y2)
    removeNonLetterFromArray(y3)
    removeNonLetterFromArray(g1)
    removeNonLetterFromArray(g2)
    removeNonLetterFromArray(g3)




    if (notEmpty(gn) || notEmpty(y1) || notEmpty(y2) || notEmpty(y3) || notEmpty(g1) || notEmpty(g2) || notEmpty(g3)) {

        let grey = g1.join('') + g2.join('') + g3.join('')


        let toUpper = false
        if (fo.uppercaseCheckbox.checked)
            toUpper = true


        let numOfColumns = fo.numOfColumns.value
        let maxMatches = fo.maxMatches.value


        // green, yellow1,yellow2,yellow3, grey, numOfColumn, maxNumOfWords, isToUppercase
        var main = new K_JSB1.MainC(gn, y1, y2, y3, grey, numOfColumns, maxMatches, toUpper);


        let text = main.search()

        //  text = printArray(g2)

        fo.textarea1.value = text
    }


}


function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function removeNonLetterFromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!isLetter(arr[i]))
            arr[i] = ""
    }
}

function printArray(arr) {
    let text = ""
    for (let i = 0; i < arr.length; i++) {
        text += "'" + arr[i] + "', "
    }

    return text
}

function notEmpty(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "")
            return true
    }

    return false
}