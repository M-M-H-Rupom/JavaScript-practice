// ES6
let person = {
    fname : 'Mohrajul',
    lname : 'hasan',
    age : 23
}
let {fname,lname} = person;  //object destructuring 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let [Banana,Orange] = fruits;   // array destructuring
let lang = 'javascript'
let o_text = ''
for(let l of lang){        // for of loop in string 
    o_text += l  + 'hey'+ "<br>"
}
// document.write(o_text)
let r_text = ''
function restParam(...agrs){    // rest parameter
    for(let arg of agrs){
        r_text += 'number: ' + arg + '<br>'
    }
}
restParam(12,34,54,12,1,32)
// document.write(r_text)
// console.log(r_text);

///
let myobj = {          // obj this keyword
    city : 'Rangpur',
    capital : 'Dhaka',
    country : 'Bangladesh',
    address : function(){
        return 'Address : ' + this.city + ',' + this.capital + ',' + this.country;
    }
}
this_func = myobj.address()

// JSON 
let json_data = '{"fullname" : "Adil ahnaf" , "Age" : 7}'
let json_obj = JSON.parse(json_data);      //JSON parse 

let obj_json = {
    fruit : 'mango',
    session : 'summer'
}
let data_json = JSON.stringify(obj_json)   // JSON stringify object

let array_json = ['summer','rainy','autumn','late autumn','winter','spring']
let json_array = JSON.stringify(array_json);   // JSON stringify array
let obj_james = {
    j_name : 'James',
    address : 'USA'
}
// console.log(obj_james['address']);
let james_details = ''
for(let a in obj_james){
  james_details += a + ': ' + obj_james[a]
}

// PHP json encode decode

// BOM 
function my_open() {   
    // window.open("https://www.w3schools.com");  // open window 
    // window.open("", "", "width=400, height=400");  // new browser window 
    new_window = window.open("https://www.w3schools.com");
}
function my_close(){
    // window.close()    // close window
    new_window.close()
}
// console.log(screen.width);  //screen width 
// console.log(screen.height);  //screen height

function my_location(){
    window.location.href = 'https://www.google.co.uk/'   // window location
}
function location_assing(){
    window.location.assign('https://www.w3schools.com/')   // location assign load a new document
}
function history_back(){
    window.history.back();
}