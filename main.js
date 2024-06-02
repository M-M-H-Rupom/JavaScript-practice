// alert('hello alert')

let str_arr = ['a','b','c','d','e','f','c','d']
let num_arr = [1,3,5,6,8]
let multiple_arr = [5,6,[7,8],[9,10]]
let l_output = str_arr.length;   // array length
let arr_string = str_arr.join('')
let j_output = str_arr.join('');  // array join
let arr_push = num_arr.push(9)   //array push 
let arr_pop = num_arr.pop()   //array pop
let arr_shift = num_arr.shift()  //array shitf 
let arr_unshift = num_arr.unshift(7) // array unshift 
let arr_concat = str_arr.concat(num_arr) //array concat
let arr_flat = multiple_arr.flat()  //array flat
let arr_slice = str_arr.slice(2,4) // array slice 
let arr_splice = str_arr.splice(0,2,'m','n') //array splice

let arr_indexof = str_arr.indexOf('c') // index of 
let arr_last_index = str_arr.lastIndexOf('c')  // last index of
let arr_include = str_arr.includes('d') //includes 

let foreach_data = ''
let arr_foreach = num_arr.forEach(function(value,index){  // for each array
    foreach_data += `${index} : ${value} ` 
})
let arr_map = num_arr.map((value) => {
    return value * 2 + 'hello';     // return a new array map
})
let arr_filter = num_arr.filter(function(element){
    return element >= 7         // array filter create a new array after filtering
})
let arr_some = num_arr.some(function(val){
   return val >= 7
})
let arr_every = num_arr.every(function(val){
    return val >= 7
})
let arr_from = Array.from('BROTHER')  // make a array from string 
let arr_keys = num_arr.keys()
let arr_k = ''
for(let key of arr_keys){  // get array keys 
    arr_k += key + ' '
}
let arr_with = num_arr.with(0,1)
let arr_spead = [...num_arr,...str_arr,...multiple_arr];

// console.log(arr_spead);


// string 
let str = 'Abcdef'
let str_1 = 'MNOP'
let str_lenth = str.length   //string length
let str_n_line = 'apple\nmango'  //string new line
let str_charAt = str.charAt(1)    //string character at a index
let str_slice = str.slice(1,3)      // string slice 
let sub_str = str.substr(3,6)        // sub str
let sub_string = str.substring(2,5)  // sub string 
let str_upper = str.toUpperCase()   // uppercase 
let str_lower = str.toLowerCase()   // lowercase
let str_concat = str.concat(str_1)  // string concat
let text_1 = '  Hello world  '
let str_trim = text_1.trim('hello')  // trim string 
let trim_start = text_1.trimStart()     // trim start white space 
let trim_end = text_1.trimEnd()    // trim string end white space 
let text = '5'
let pad_start = text.padStart(6,'0')  // pad start 
let from_arr = Array.from(pad_start)   // string to array 
let new_arr = pad_start.split('')       // string to array
let pad_end = text.padEnd(3,'0')        // pad end 


