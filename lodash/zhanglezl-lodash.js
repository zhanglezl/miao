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
        var test = process(test) 
        for (var i = from; i < ary.length; i++) {
            if (test(ary[i])) return i
        }
        return -1    
    }
    function findLastIndex(ary, test, from = ary.length - 1) {
        var test = process(test) 
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
                res.push(...flattenDeep(ary[i])) // res = res.concat(flattendeep(ary[i]))
                i++
            } else { 
                res.push(ary[i++])
            }
        }
        return res
    }
    function flattenDepth(ary, depth) {
        var res = []
        if (depth == 0) return ary
        for (var i = 0; i < ary.length; i++) {
            if (Array.isArray(ary[i])) {
                if (depth == 1) {
                  res.push(ary[i])    
                } else {
                    depth--
                    res = res.concat(flattenDepth(ary[i],depth))
                }
            } else {
                res.push(ary[i])
            }
        }
        return res
    }
    
    function fromPairs(pairs) {
        for (var i = 0; i < pairs.length; i++) {
            res[pairs[i][0]] = pairs[i][1]
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
        if (n == 0) return ary;
        return ary.slice(0, -n)
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
        test = process(test)
        for (var i = 0; i < ary.length; i++) {
            if (!test(ary[i])) return false
        }
        return true
    }

    function filter(ary, test) {
        test = process(test)
        var res = []
        for (var i = 0; i < ary.length; i++) {
            if (test(ary[i])) {
                res.push(ary[i])
            }
        }
        return res
    }
    
    function find(ary, test) {
        test = process(test)
        for (var i = 0; i < ary.length; i++) {
            if (test(ary[i])) return ary[i]
        }
    }

    function toArray(val) {
        var res = []
        if (typeof val == "string") {
            return val.split("")
        }
        if (typeof val == "object") {
           
            for (key in val) {
                res.push(val[key])
            }
            return res 
        }
        
    }

    function max(ary) {
        if(!ary.length) return undefined;
        var max = -Infinity
        for (var i = 0; i < ary.length; i++) {
            if (max < ary[i]) {
                max = ary[i]
            }
        }
        return max 
    }
    function maxBy(ary,test) {
        var max = -Infinity
        test = process(test)
        for (var i = 0; i < ary.length; i++) {
            if (max < test(ary[i])) {
                max = i
            }
        }
        return ary[max]  
    }
    function min(ary) {
        if(ary.length == 0) return undefined;
        var min = Infinity
        for (var i = 0; i < ary.length; i++) {
            if (min > ary[i]) {
                min = ary[i]
            }
        }
        return min 
    }
    function minBy(ary,test) {
        var min = Infinity
        test = process(test)
        for (var i = 0; i < ary.length; i++) {
            if (min > test(ary[i])) {
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
    function sumBy(ary,test) {
        test = process(test)
        return ary.reduce(function(a,b) { 
            return test(a) + test(b)
        }) - test(ary[0])
    }
    function curry(fn) {
        return function curried(...args) {
            if (args.length < fn.length) {
                return function(...args2) {
                    return curried(...args,...args2)
                }

            }
            return fn(...args)
        }
    }


    function curry2(f, length = f.length) {
        return function(...args) {
            if (args.length < length) {
                return curry(f.bind(null, args), length - args.length)
            } else {
                return f(...args) 
            }
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
    
    function groupBy(array, predicate) {   // if predicate is not inputed , ju
        var res = {}       
        predicate = process(predicate)                           // just output itself
        for (var i = 0; i < array.length; i++) {
            var key = predicate(array[i]) 
            if (!Array.isArray(res[key])) {
                res.key = []
            } else {
                res[key].push(array[i])
            }
        }
    }
    
    function mapValues(obj, mapper) {
        var res = {}
        mapper = process(mapper)
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
        mapper = process(mapper)
        for (var i = 0; i < ary.length; i++) {
            res.push(mapper(ary[i]), i ,ary)
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
    function differenceBy(ary, ...values, iteratee = it => it) {
        var res = [].concat(...values)
        iteratee = process(iteratee)
        return ary.filter(it => res.every(re => iteratee(re) !== iteratee(it)))
    }

    function intersection(...values) { 
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

    function property(path) {
        var names = path.split(".")
        return function(obj) {
            for (var name of names) {
                if (name in Object(obj)){
                    obj = obj[name]    
                } else {
                    return
                }
            }
            return obj
        }
    }

    function get(object, path, defaultValue) {
        var names = path.split(".")
            for (var name of names) {
                if (name in Object(object)){
                    object = object[name]    
                } else {
                    return defaultValue
                }
            }
        return object
    }

    function isMatch(src, obj) {
        for (var key in src) {
            if (src[key] && typeof sce[key] == 'object') {
                if (!isMatch(src[key], obj[key])) {
                    return false 
                }
            } else {
                if (obj[keyh] !== src[key]) {
                    return false 
                }
            }
        } 
        return true 
    } 

    function matches(src) {
        return _.bind(isMatch,null, _, src)
    } 
    function bind(f, thisArg, ...partials) {
        return function (...args) {
            var copy = partials.slice()
            for (var i = 0; i < copy.length; i++ ) {
                if (copy[i] == window) {
                    copy[i] = args.shift()
                }
            }
            return f.call(thisArg, ...copy, ...args)
        }
    }

    function ary(f, n = f.length) {
         return function(...args) {
            
        }
    }
    function before(n, func) {
        var c = 0
        var res 
        return function (...args) {            
            if (c < n) {
                return res = func.call(this, ...args)
                c++
            } else {
                return res 
            }
        }
    }

    function after(n, func) {
        var c = 0
        return function(...args) {
            c ++
            if (c > n) {
                return func.call(this, ...args) 
            }
            
        }
    }

    function flip(func) {
        return function(...args) {
            return func(...args.reverse())
        }
    }

    function negate(predicate) {
        return function(...args) {
            return !predicate(...args)
        }
    }

    function spread(func,start = 0) {         // func 绑定function的this 
        return function(ary) {               //  func.call(this, ...ary)
            return func.apply(this, ary)    // func.apply.bind(func, this)(ary)
        }                              
    }

    function process(predicate) {
        if (isFunction(predicate)) {
          return predicate
        } else if (isObject(predicate)) {
          return matches(predicate)
        } else if (isArray(predicate)) {
          return matchesProperty(predicate)
        } else if (isString(predicate)) {
          return property(predicate)
        }
      }
    return {
        compact, chunk, join, last, lastindexof, fill, findIndex, findLastIndex, flatten, flattenDeep, flattenDepth, fromPairs, head, indexOf, initial , drop, dropRight, reverse, sortedIndex, max, maxBy, min, minBy, sum, sumBy, find, toArray, every, filter, curry, concat, groupBy, mapValues, map, some, identity, mapKeys, difference, intersection, property, get, isMatch, matches, bind, 
    }

}()