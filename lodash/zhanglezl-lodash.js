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
            res +=  ary[i] +''+ separator
        }
        res = res +''+ ary[ary.length - 1]
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

    function findIndex(ary, test, from = 0) {
        for (var i = from; i < ary.length; i++) {
            if (test(ary[i])) return i
        }
        return -1    
    }
    function findLastIndex(ary, test, from = ary.length - 1) {
        for (var i = from; i >= 0; i--) {
            if (test(ary[i])) return i
        }
        return -1    
    }

    function flatten(ary) {
        var res = []                            // return [].concat(...ary)
        for (var i = 0; i < ary.length; i++) {  // return [].concat.apply([], arrarys)
            if (Array.isArray(ary[i])) {    // return [].concat.apply.bind([].concat, [])
                res.push(...ary[i])
            } else {
                res.push(ary[i])
            }    
        }
        return res   
    }

    function flattenDeep(ary) {
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
    }D
    function flattenDepth(ary, depth) {
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
    
    function fromPairs(pairs) {
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

    function indexOf(ary,val, from = 0) {
        for (var i = from; i <= ary.length; i++) {
            if (val == ary[i]) return i
        }
        return -1
    }

    function initial(ary) {
        var res = []
        for (var i = 0; i < ary.length - 1; i++) {
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

    function dropRight(ary, n = 1) {
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
        for (var i = 0; i < ary.length >> 1; i++) {
            var j = ary.length - 1 - i
            var t = ary[i]
            ary[i] = ary[j]
            ary[j] = t
        }
        return ary
    }

    function sortedIndex(ary, val) {
        for (var i = 0; i < ary.length; i++) {
            if (val <= ary[i]) {
                return i 
            }
        }
        return i + 1
    }
    function every(ary, test) {
        for (var i = 0; i < ary.length; i++) {
            if (!test(ary[i])) return false
        }
        return true
    }

    function filter(ary, test) {
        var res = []
        for (var i = 0; i < ary.length; i++) {
            if (test(ary[i])) {
                res.push(ary[i])
            }
        }
        return res
    }
    
    function find(ary, test) {
        for (var i = 0; i < ary.length; i++) {
            if (test(ary[i])) return ary[i]
        }
    }

    function toArray(val) {
        if (typeof val == "string") {
            return val.split("")
        }
        if (typeof val == "object") {
            var res = []
            for (key in val) {
                res.push(val[key])
            }
            return res 
        }
        
    }

    function max(ary) {
        var max = -Infinity
        for (var i = 0; i < ary.length; i++) {
            if (max < ary[i]) {
                max = ary[i]
            }
        }
        return max 
    }
    function maxBy(ary,test) {
        var max = 0
        for (var i = 0; i < ary.length; i++) {
            if (test(ary[max]) < test(ary[i])) {
                max = i
            }
        }
        return ary[max]  
    }
    function min(ary) {
        var min = Infinity
        for (var i = 0; i < ary.length; i++) {
            if (min > ary[i]) {
                min = ary[i]
            }
        }
        return min 
    }
    function minBy(ary,test) {
        var min = 0
        for (var i = 0; i < ary.length; i++) {
            if (test(ary[min]) > test(ary[i])) {
                min = i
            }
        }
        return ary[min]  
    }
    function sum(ary) {
        return ary.reduce(function(a, b) {
            return a + b
        },0)
    }
    function sumBy(ary,test = it => it) {
        return ary.reduce(function(a,b) { 
            return test(a) + test(b)
        }) - test(ary[0])
    }
    function curry(fn) {
        return function curried(...args) {
            if (args.length < fn.length) {
                return function (...args2) {
                    return curriedfn (...args,args2)
                }

            }
            return fn(...args)
        }

    }
    function concat(initArray, ...values) {
        var res = initArray 
        for (var i = 0; i < values.length; i++) {
            if(Array.isArray(values[i])) {
                values[i].forEach(it => {
                    res.push(it)
                })
            } else {
                res.push(values[i])
            }
        }
        return res
    }
    
    function groupBy(array, predicate = it => it) {   // if predicate is not inputed , ju
        var res = {}                                  // just output itself
        for (var i = 0; i < array.length; i++) {
            var key = predicate(arrary[i], i, array) 
            if (!Array.isArray(res[key])) {
                res.key = []
            } else {
                res[key].push(array[i])
            }
        }
    }
    
    function mapValues(obj, mapper) {
        var res = {}
        for (var key in obj) {
            var val = obj[key]
            res[key] = mapper(val, key, obj)
        }
        return res 
    } 
    function mapKeys(obj, mapper) {
        var res = {}
        for (var key in obj) {
            var val = obj[key]
            res[mapper(val, key, obj)] = val  
        }
        return res 
    } 
    function map(ary, mapper) {
        var res = [] 
        for (var i = 0; i < ary.length; i++) {
            res.push (mapper(ary[i]), i ,ary)
        }
        return res  
    }

    function some(ary, f) {
        return !every(ary, function(...args) {
          return !f(...args)
        })
      }

    function identity(val) {
        return val
    }

    function difference(ary, ...values) {
        var res = [].concat(...values)
        return ary.filter(it => res.indexOf(it) == -1)
    }

    function intersection([values]) { 
        var res = []
        for (var i = 0; i < values[0].length; i++) {
            for (var j = 1; j < values.length; j++) {
                if (!values[j].includes(values[0][i])) {
                    break
                }
                if (j = values.length - 1) {
                    res.push(values[0][i])
                }
            }
            return res
        }
    }
    return {
        compact, chunk, join, last, lastindexof, fill, findIndex, findLastIndex, flatten, flattenDeep, flattenDepth, fromPairs, head, indexOf, initial , drop, dropRight, reverse, sortedIndex, max, maxBy, min, minBy, sum, sumBy, find, toArray, every, filter, curry, concat, groupBy, mapValues, map, some, identity, mapKeys, difference, intersection, 
    }

}()