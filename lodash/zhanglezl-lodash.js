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
                if (i < ary.length - 1) {
                    result.push([])
                }
            }
        }
        return result 
    }
    function join(ary,separator) {
        var res = ''
        for (var i = 0; i < ary.length - 1 ; i++) {
            res +=  ary[i] + separator
        }
        res = res + ary[ary.length - 1]
        return res
        
    }

    function last(ary) {
        return ary[ary.length - 1]
    }
    
    function lastindexof(ary,val) {
        for (var i = ary.length - 1; i >= 0; i--) {
            if (val == ary[i]) return i
        }
        return -1
    }

    function fill(ary, val, start = 0,end = ary.length) {
        for (var i = start; i < end; i++) {
            ary[i] = val
        }
        return ary
    }

    function findindex(ary, test, from = 0) {
        for (var i = from; i < ary.length; i++) {
            if (test(ary[i])) return i
        }
        return -1    
    }
    function findlastindex(ary, test, from = ary.length - 1) {
        for (var i = from; i >= 0; i--) {
            if (test(ary[i])) return i
        }
        return -1    
    }

    function flatten(ary) {
        var res = []
        for (var i = 0; i < ary.length; i++) {
            if (Array.isArray(ary[i])) {
                res.push(...ary[i])
            } else {
                res.push(ary[i])
            }    
        }
        return res   
    }

    function flattendeep(ary) {
        var res = []
        var i = 0
        while(i < ary.length) {
            if (Array.isArray(ary[i])) {
                res.push(...flattendeep(ary[i])) // res = res.concat(flattendeep(ary[i]))
                i++
            } else {
                res.push(ary[i++])
            }
        }
        return res
    }
    function flattendepth(ary, depth) {
        var res = []
        if (depth == 0) return ary
        for (var i = 0; i < ary.length; i++) {
            if (Array.isArray(ary[i])) {
                if (depth == 1) {
                  res.push(ary[i])    
                } else {
                    depth--
                    res = res.concat(flattendepth(ary[i],depth))
                }
            } else {
                res.push(ary[i])
            }
        }
        return res
    }
    
    function frompairs(pairs) {
        var res = {}
        if (pairs.length == 2) {
            res[pairs[0]] = pairs[1]
            return res
        }
        for (var i = 0,j = 0; i < pairs.length; i++) {
            res[pairs[i][j]] = pairs[i][j + 1]
        }
        return res 
    }

    function head(ary) {
        return ary[0]
    }

    function indexof(ary,val, from = 0) {
        for (var i = from; i <= ary.length; i++) {
            if (val == ary[i]) return i
        }
        return -1
    }

    function initial(ary) {
        var res = []
        for (var i = 0; i < aryh.length - 1; i++) {
            res.push(ary[i])
        }
        return res
    }
    function drop(ary, n = 1) {
        var res = []
        if (ary.length <= n) {
            return []
        }
        for (var i =  n ; i < ary.length; i++) {
            res.push(ary[i])
        }
        return res
    }

    function dropright(ary, n = 1) {
        var res = []
        if (ary.length <= n) {
            return []
        }
        for (var i = ary.length - 1 - n ; i >= 0 ; i--) {
            res.push(ary[i])
        }
        return res
    }

    function reverse(ary) {
        var j = ary.length
        for (var i = 0; i < ary.length >> 1; i++) {
            var t = ary[i]
            ary[i] = ary[j]
            ary[j] = t
            j--
        }
        return ary
    }

    function sortedindex(ary, val) {
        for (var i = 0; i < ary.length; i++) {
            if (val <= ary[i]) {
                return i 
            }
        }
        return i + 1
    }
    
    return {
        compact, chunk, join, last, lastindexof, fill, findindex, findlastindex, flatten, flattendeep, flattendepth, frompairs, head, indexof, initial , drop, dropright, reverse, sortedindex, 
    }

}()