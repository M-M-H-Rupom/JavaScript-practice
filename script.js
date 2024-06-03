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
function history_back(){     // history back
    window.history.back();
}
function history_forward(){   // history forward
    window.history.forward();
}
let confirm_text = ''
function confirm_popup(){           // confirm pop up
    if(confirm('are you confirm')){
        confirm_text = 'Confirmed this'
    }else{
        confirm_text = 'Cancel this'
    }
    document.querySelector('.display_some').innerHTML = confirm_text
    console.log(confirm_text);
}
let prom_text = ''
function prompt_data(){
    let prom_data = prompt('Write somethink','hello');  // prompt box
    // if(prom_data == null || prom_data == ''){
    //     prom_text = 'Empty this'
    // }else{
    //     prom_text = prom_data
    // }
    if(prom_data !== ''){
        prom_text = prom_data
    }else{
        prom_text = 'Empty this'
    }
    document.querySelector('.display_some').innerHTML = prom_text
}
let set_time = ''
function set_timeout(){
    set_time = setTimeout(function(){    //set timeout 
        set_time_out();
    },1000); 
}
function set_time_out(){
    alert('Set time out')
}
function clear_timeout(){    // clear timeout
    clearTimeout(set_time)
}
let interval_data = ''
function set_interval(){      // set interval
    interval_data = setInterval(function(){
        let date = new Date();
        let local_date = date.toLocaleTimeString();
        document.querySelector('.display_some').innerHTML = local_date;
    },1000)
}
function clear_interval(){     // clear interval
    clearInterval(interval_data)
}

//  js class 
class cars{
    constructor(brand){
        this.carname = brand
    }
    present_car(){
        return 'i have a ' + this.carname;
    }
}
let a_cars = new cars('BMW');
// document.querySelector('.display_some').innerHTML = a_cars.present_car()

class bikes{
    constructor(bikeBrand){
        this.bike_name = bikeBrand;
        // this.bike_color = color
    }
    p_bike(){
        return 'my bike is ' + this.bike_name 
    }
}
class Model extends bikes{     // class Inheritance
    constructor(bikeBrand,bikeModel){
        super(bikeBrand)              // call parent constructor use super
        this.bike_model = bikeModel
    }
    bike_info(){
        return this.p_bike() + ' the model is ' + this.bike_model
    }
}
let bike_details = new Model('Yamaha','FZ-S')
// document.querySelector('.display_some').innerHTML = bike_details.bike_info()

class myCar {
    constructor(name) {
      this.name = name;
    }
    static hello() {            // class static
      return "Hello!!";
    }
}
let new_car = new myCar()
document.querySelector('.display_some').innerHTML = myCar.hello()

  