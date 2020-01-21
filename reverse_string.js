function reverse_string(str) {
    // create an array
    var str2 = str.split("");
    // reverse array
    var str2 = str2.reverse();
    // join again into new string
    var str1 = str2.join("");
    console.log(str1)
    return

}


str1 = "Here we go";
reverse_string(str1);