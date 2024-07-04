function naiveSearch(long, short) {
    var count = 0;
    for (var i=0; i< long.length; i++) {
        for (var j=0; j< short.length; j++) {
            //console.log('checking', short[j], long[i+j])
            if (short[j] !== long[i+j]) {
                //console.log('break', short[j], long[i+j])
                break;
            }
            if (j === short.length -1) {
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("this is the text i am text search text", "texts"));