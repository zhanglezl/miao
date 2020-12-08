var zhanglezl = function () {
    function compact(ary) {
        var result = []
        for (var i = 0; i < ary.length; i++) {
            if (ary[i]) {
                result.push(ary[i])
            }
        }
        return result
    }
    function chunk (ary, size) {
        var result = [[]]
        var count = 0 
        for (var i = 0,j = 0; i < ary.length; i++) {
            count++
            result[j].push(ary[i])
            if (count == size) {
                count = 0
                j++
                result.push([])
            }
        }
        return result 
    }
    


    return {
        compact,chunk,
    }

}()