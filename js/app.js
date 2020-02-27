
/*

//'use strict',


var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var store1 = {
  name: 'seattle',
  MinCustomer: 23,
  MaxCustomer: 65,
  Avgcookie: 6.3,
  totalCookiesPerHour: [],
  totalCookiesPerDay: 0,
  getNumofcookie: function () {

    // console.log(this.totalCookiesPerDay);

    // console.log(hours.length);
    for (var i = 0; i < 15 ; i++) {
      var randCustomer = getRandomCustomer(this.MinCustomer, this.MaxCustomer);
      //console.log(randCustomer);
      var numbofCookies = Math.floor(randCustomer * this.Avgcookie);
      // console.log(numbofCookies);

      this.totalCookiesPerHour.push(numbofCookies);
      this.totalCookiesPerDay += this.totalCookiesPerHour[i];
      // console.log(this.totalCookiesPerDay);


    }
    //  console.log(this.totalCookiesPerDay);
  },

  render: function () {
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = store1.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < 15; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}, ${this.totalCookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    liEl.textContent = `total ${this.totalCookiesPerDay}`;
    ulEl.appendChild(liEl);

  }
};



function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

store1.getNumofcookie();
store1.render();


var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var store2 = {
  name: 'tokyo',
  MinCustomer: 3,
  MaxCustomer: 24,
  Avgcookie: 1.2,
  totalCookiesPerHour: [],
  totalCookiesPerDay: 0,
  getNumofcookie: function () {

    // console.log(this.totalCookiesPerDay);

    // console.log(hours.length);
    for (var i = 0; i < 15 ; i++) {
      var randCustomer = getRandomCustomer(this.MinCustomer, this.MaxCustomer);
      //console.log(randCustomer);
      var numbofCookies = Math.floor(randCustomer * this.Avgcookie);
      // console.log(numbofCookies);

      this.totalCookiesPerHour.push(numbofCookies);
      this.totalCookiesPerDay += this.totalCookiesPerHour[i];
      // console.log(this.totalCookiesPerDay);


    }
    //  console.log(this.totalCookiesPerDay);
  },

  render: function () {
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = store2.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < 15; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}, ${this.totalCookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    liEl.textContent = `total ${this.totalCookiesPerDay}`;
    ulEl.appendChild(liEl);

  }
};



function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

store2.getNumofcookie();
store2.render();


var store3 = {
  name: 'Dubai',
  MinCustomer: 11,
  MaxCustomer: 38,
  Avgcookie: 3.7,
  totalCookiesPerHour: [],
  totalCookiesPerDay: 0,
  getNumofcookie: function () {

    // console.log(this.totalCookiesPerDay);

    // console.log(hours.length);
    for (var i = 0; i < 15 ; i++) {
      var randCustomer = getRandomCustomer(this.MinCustomer, this.MaxCustomer);
      //console.log(randCustomer);
      var numbofCookies = Math.floor(randCustomer * this.Avgcookie);
      // console.log(numbofCookies);

      this.totalCookiesPerHour.push(numbofCookies);
      this.totalCookiesPerDay += this.totalCookiesPerHour[i];
      // console.log(this.totalCookiesPerDay);


    }
    //  console.log(this.totalCookiesPerDay);
  },

  render: function () {
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = store3.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < 15; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}, ${this.totalCookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    liEl.textContent = `total ${this.totalCookiesPerDay}`;
    ulEl.appendChild(liEl);

  }
};



function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

store3.getNumofcookie();
store3.render();


var store4 = {
  name: 'Paris',
  MinCustomer: 20,
  MaxCustomer: 38,
  Avgcookie: 2.3,
  totalCookiesPerHour: [],
  totalCookiesPerDay: 0,
  getNumofcookie: function () {

    // console.log(this.totalCookiesPerDay);

    // console.log(hours.length);
    for (var i = 0; i < 15 ; i++) {
      var randCustomer = getRandomCustomer(this.MinCustomer, this.MaxCustomer);
      //console.log(randCustomer);
      var numbofCookies = Math.floor(randCustomer * this.Avgcookie);
      // console.log(numbofCookies);

      this.totalCookiesPerHour.push(numbofCookies);
      this.totalCookiesPerDay += this.totalCookiesPerHour[i];
      // console.log(this.totalCookiesPerDay);


    }
    //  console.log(this.totalCookiesPerDay);
  },

  render: function () {
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = store4.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < 15 ; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}, ${this.totalCookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    liEl.textContent = `total ${this.totalCookiesPerDay}`;
    ulEl.appendChild(liEl);

  }
};



function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

store4.getNumofcookie();
store4.render();




var store5 = {
  name: 'Lima',
  MinCustomer: 20,
  MaxCustomer: 38,
  Avgcookie: 2.3,
  totalCookiesPerHour: [],
  totalCookiesPerDay: 0,
  getNumofcookie: function () {

    // console.log(this.totalCookiesPerDay);

    // console.log(hours.length);
    for (var i = 0; i < 15 ; i++) {
      var randCustomer = getRandomCustomer(this.MinCustomer, this.MaxCustomer);
      //console.log(randCustomer);
      var numbofCookies = Math.floor(randCustomer * this.Avgcookie);
      // console.log(numbofCookies);

      this.totalCookiesPerHour.push(numbofCookies);
      this.totalCookiesPerDay += this.totalCookiesPerHour[i];
      // console.log(this.totalCookiesPerDay);


    }
    //  console.log(this.totalCookiesPerDay);
  },

  render: function () {
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = store5.name;
    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < 15 ; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}, ${this.totalCookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    liEl.textContent = `total ${this.totalCookiesPerDay}`;
    ulEl.appendChild(liEl);

  }
};



function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

store5.getNumofcookie();
store5.render();

*/
// using of constructor
//'use strict',
/*
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];






function Store (name, MinCustomer ,MaxCustomer,Avgcookie ){

this.name=name;
this.MinCustomer=MinCustomer;
this.MaxCustomer=MaxCustomer;
this.Avgcookie=Avgcookie;
this.totalCookiesPerHour=[];
this.totalCookiesPerDay=0;


}

function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



Store.prototype.getNumofcookie = function () {

  // console.log(this.totalCookiesPerDay);

  // console.log(hours.length);
  for (var i = 0; i < 14; i++) {
    var randCustomer = getRandomCustomer(this.MinCustomer, this.MaxCustomer);
    //console.log(randCustomer);
    var numbofCookies = Math.floor(randCustomer * this.Avgcookie);
    // console.log(numbofCookies);

    this.totalCookiesPerHour.push(numbofCookies);
    this.totalCookiesPerDay += this.totalCookiesPerHour[i];
    // console.log(this.totalCookiesPerDay);


  }
  //  console.log(this.totalCookiesPerDay);
},

Store.prototype.render = function(){

  var container = document.getElementById('cookie-stand');
  var articleEl = document.createElement('article');
  container.appendChild(articleEl);
  var h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.name;
  var ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (var i = 0; i < 14; i++) {
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${hours[i]}, ${this.totalCookiesPerHour[i]} cookies`;
    //ulEl.appendChild(liEl);
  }
  var liEl = document.createElement('li');
  ulEl.appendChild(liEl);
  liEl.textContent = `total ${this.totalCookiesPerDay}`;
 // ulEl.appendChild(liEl);



};







var store1 = new Store( 'Seattle' , 23,65,6.3);

store1.getNumofcookie();
store1.render();

var store2 = new Store(  'Tokyo' , 3 , 24 , 1.2  );                      
//console.log(store2);
store2.getNumofcookie();

store2.render();

var store3 = new Store( 'Dubai', 11 , 38 , 3.7  );
store3.getNumofcookie();

store3.render();

var store4 = new Store( ' Paris' , 20 ,38 , 2.3  );
store4.getNumofcookie();

store4.render();

var store5 = new Store('Lima', 20 , 38 , 2.3 );
store5.getNumofcookie();

store5.render();
*/














// using of constructor and making table
//'use strict',

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var hoursTotalArray = [];

var totalForTotal= 0;


function Store (name, MinCustomer ,MaxCustomer,Avgcookie ){

this.name=name;
this.MinCustomer=MinCustomer;
this.MaxCustomer=MaxCustomer;
this.Avgcookie=Avgcookie;
this.totalCookiesPerHour=[];
this.totalCookiesPerDay=0;


}

function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



Store.prototype.getNumofcookie = function () {

  // console.log(this.totalCookiesPerDay);

  // console.log(hours.length);
  for (var i = 0; i < 14; i++) {
    var randCustomer = getRandomCustomer(this.MinCustomer, this.MaxCustomer);
    //console.log(randCustomer);
    var numbofCookies = Math.floor(randCustomer * this.Avgcookie);
    // console.log(numbofCookies);

    this.totalCookiesPerHour.push(numbofCookies);
    this.totalCookiesPerDay += this.totalCookiesPerHour[i];
    // console.log(this.totalCookiesPerDay);


  }
  //  console.log(this.totalCookiesPerDay);
},

Store.prototype.render = function(){

  var container = document.getElementById('cookie-stand');
  var articleEl = document.createElement('article');
  container.appendChild(articleEl);
  var h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.name;
  var ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (var i = 0; i < 14; i++) {
    var liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${hours[i]}, ${this.totalCookiesPerHour[i]} cookies`;
    //ulEl.appendChild(liEl);
  }
  var liEl = document.createElement('li');
  ulEl.appendChild(liEl);
  liEl.textContent = `total ${this.totalCookiesPerDay}`;
 // ulEl.appendChild(liEl);



};





//  print the result as a table

 



Store.prototype.tableOutput=function(){


//SECOND row

var tr2El = document.createElement('tr');
tableEl.appendChild(tr2El);
//document.getElementsByTagName(tr2El);

var td1El = document.createElement('td');
td1El.textContent= this.name ;
tr2El.appendChild(td1El);

for(var i=0 ; i< hours.length;i++){
  var tdEl = document.createElement('td');
  tdEl.textContent= this.totalCookiesPerHour[i] ;
  tr2El.appendChild(tdEl);
}
var totalEl = document.createElement('td');
totalEl.textContent = this.totalCookiesPerDay ;
tr2El.appendChild(totalEl);






};





// first row


var tableContainer = document.getElementById('container');
var tableEl = document.createElement('table');
tableContainer.appendChild(tableEl);

var tr1El = document.createElement('tr');
tableEl.appendChild(tr1El);

var th1El = document.createElement('th');
th1El.textContent=' ';
tr1El.appendChild(th1El);

for(var i=0 ; i<hours.length ; i++){
  var thEl = document.createElement('th');
  thEl.textContent=hours[i];
  tr1El.appendChild(thEl);

}
var th3El = document.createElement('th');
th3El.textContent=' Daily Total ';
tr1El.appendChild(th3El);

//


// calling area

var store1 = new Store( 'Seattle' , 23,65,6.3);

store1.getNumofcookie();
store1.render();
store1.tableOutput();

var store2 = new Store(  'Tokyo' , 3 , 24 , 1.2  );                      
//console.log(store2);
store2.getNumofcookie();

store2.render();
store2.tableOutput();

var store3 = new Store( 'Dubai', 11 , 38 , 3.7  );
store3.getNumofcookie();

store3.render();
store3.tableOutput();


var store4 = new Store( ' Paris' , 20 ,38 , 2.3  );
store4.getNumofcookie();

store4.render();
store4.tableOutput();


var store5 = new Store('Lima', 20 , 38 , 2.3 );
store5.getNumofcookie();

store5.render();
store5.tableOutput();


// calculate the total for all hours



var hoursTotal=0;

function hourTotal (){
  for(var i=0 ; i<hours.length; i++){
    hoursTotal = store1.totalCookiesPerHour[i]+ store2.totalCookiesPerHour[i]+store3.totalCookiesPerHour[i]+store4.totalCookiesPerHour[i]+store5.totalCookiesPerHour[i];
    hoursTotalArray.push(hoursTotal);
    totalForTotal += hoursTotalArray[i];
  }
}

hourTotal();

// last row

var finalTotal = document.createElement('tr');
tableEl.appendChild(finalTotal);

var tdTotalEl = document.createElement('td');
tdTotalEl.textContent= 'Totals' ;
finalTotal.appendChild(tdTotalEl);

for(var j=0 ; j<hours.length ; j++){
  var lastRow = document.createElement('td');
  lastRow.textContent=hoursTotalArray[j];
  finalTotal.appendChild(lastRow);

}

var totalTotal = document.createElement('td');
totalTotal.textContent = totalForTotal;
finalTotal.appendChild(totalTotal);


/*

//making the form 


//access the form so we can attach an event listener
var newstoreform = document.getElementById('newstoreform');

//event listeners call back function
function addNewStore(event){ 
  // prevents page from refreshing upon event
  event.preventDefault();

//assigning new value to property assigned to current property; (target) is the form; minCustPerHour is set in HTML input tag;
var newname = event.target.name.value;

var newMinCustomer= event.target.MinCustomer.value;
var newMaxCustomer = event.target.MaxCustomer.value;
var newAvgCookie = event.target.Avgcookie.value;
//console.log(newname);
// make new instance by passing in new arguements
new Store(newMinCustomer, newMaxCustomer, newAvgCookie, newname);

//console.log(new Store);
tableContainer.innerHTML='';
newstoreform.getNumofcookie();
newstoreform.render();
newstoreform.tableOutput();
newstoreform.hourTotal();
}

//add event listener, listening for event, put at bottom for code readability
newstoreform.addEventListener('Submit', addNewStore);

//Now we need to call our functions -- in the proper order

hourTotal();
*/





//making the form 


//access the form so we can attach an event listener
var newstoreform = document.getElementById('newstoreform');

//event listeners call back function
//function addNewStore(event){ 
  // prevents page from refreshing upon event
  newstoreform.addEventListener('Submit' , function(event){

event.preventDefault();

var newname = event.target.name.value;
console.log(newname);
var newMinCustomer= event.target.MinCustomer.value;
var newMaxCustomer = event.target.MaxCustomer.value;
var newAvgCookie = event.target.Avgcookie.value;
//error checking for values in all boxes
if (!newname.value || !newMinCustomer.value || !newMaxCustomer.value || !newAvgCookie.value ) {
  return alert('Please fill in all values');
}
//error checking for number value
else if (isNaN(newMinCustomer.value) || isNaN(newMaxCustomer.value) || isNaN(newAvgCookie.value)) {
return alert('Please enter a number');
}
//error checking for max and min values
else if (Number(newMinCustomer.value) > Number(newMaxCustomer.value)) {
return alert('Please enter a maximum customers per hours value greater than the minimum customers per hour');
}
else {
console.log("No errors");
}

var newnewform = new Store(newname,newMinCustomer,newMaxCustomer,newAvgCookie);
//console.log(newnewform);
newnewform.getNumofcookie();
newnewform.render();
newnewform.tableOutput();
newnewform.hourTotal();
  });


  







