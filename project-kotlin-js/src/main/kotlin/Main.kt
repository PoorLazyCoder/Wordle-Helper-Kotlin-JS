
fun main() {
    console.log("My Main6666 Begin....")
}


class MainC(var greenArr:Array<String>,
            var yellow1Arr:Array<String>,
            var yellow2Arr:Array<String>,
            var yellow3Arr:Array<String>,
            var grey_st:String,
            var numOfColumn: Int,
            var maxNumOfWords:Int,
            var isToUppercase:Boolean
) {


    fun search() :String {

        var green = listOf("f", "", "", "", "r") //  is correct and in the correct position
        var yellow1 = listOf("", "", "", "", "") // answer but not in the right position
        var yellow2 = listOf("", "", "", "", "")
        var yellow3 = listOf("", "", "", "", "")
        var grey = ""

        green = greenArr.toList()
        yellow1 = yellow1Arr.toList()
        yellow2 = yellow2Arr.toList()
        yellow3 = yellow3Arr.toList()
        grey = grey_st



        val matchWords = Solver(green, yellow1,yellow2,yellow3, grey ).solve()

        val total = "Total: ${matchWords.size}\n\n"

        return  total + joinListColumns(matchWords,numOfColumn,maxNumOfWords,isToUppercase)
    }



    fun joinListColumns(words: List<List<String>>, num: Int, maxNum: Int,toUppercase:Boolean): String {
        var sb = "";
        var counter = 1

        words.forEach {

            if(counter < maxNum) {
                var joinWord = it.joinToString("") + " "
                if (toUppercase) joinWord = joinWord.uppercase()
                sb += joinWord
                if (counter % num == 0)
                    sb += "\n"

                counter++
            }
        }

        return sb
    }

}




/*
class MainC(var s1: String, var s2:String) {
    fun getWords() :String {
        return "$s1 $s2".uppercase()
    }

    @JsName("upperALL")
    fun upperALL(st:String) :String {
        return "Upper: ${st.uppercase()}"
    }
}

 */