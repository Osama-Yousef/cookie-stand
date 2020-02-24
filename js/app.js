

'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var container = document.getElementById('stores');

// Global Random Function
function getRandomNumCust (min, max, avrg) {
    var randPerCust = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.floor(randPerCust * avrg);
  }

var numCookseattleStore ={

numCustPerHour :0,
minNumCustPerHour : 23 ,
maxNumCustPerHour : 65 ,
avgNumCookPerCust : 6.3 ,
getNumCust : function(min , max ,avg) {
this.numCustPerHour = getRandomNumCust(min , max,avg);


},



render : function(){

    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    
    //var h1El = document.createElement('h1');
    //  articleEl.appendChild(h1El);
    //  h1El.textContent = 'number of cookies per shop';
   
   
      // Creates a container
      var article = addElement('article', container);
      
      // Creates a table
      var tableElem = addElement('table', article);
      
      // Creates a header row
      var headerRowElem = addElement('tr', tableElem);
      
      addElement('th', headerRowElem, ' ');
      
      for (var i = 0; i < 14; i++) {
        addElement('th', headerRowElem, hours[i]);
      }
      
      addElement('th', headerRowElem, 'Daily Location Total');
      

// ADD BODY OF TABLE
Store.prototype.render = function(container) {
    var dataRowElem = addElement('tr', tableElem);
  
    addElement('td', dataRowElem, this.name);
  
    
    
    // ***** This add total as last columm
    addElement('td', dataRowElem, this.total);
  
  }
  
  // Creates a footer row
  var dataRowElemm2 = addElement('tr', tableElem);
  
  addElement('td', dataRowElemm2, 'Totals');



}
};


console.table(numCookseattleStore);
console.log(numCookseattleStore.getNumCust(23, 65,6.3));
console.table(numCookseattleStore);
//numCookseattleStore.render();





/*'use strict';


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var container = document.getElementById('stores');



   
 /* 

var numCookseattleStore ={

names : 'seattleStore' ,
total :0,
numCustPerHour :[],
minNumCustPerHour : 23 ,
maxNumCustPerHour : 65 ,
avgNumCookPerCust : 6.3 ,
numCook:[],
getNumCust : function(min , max ,avg) {
//this.numCustPerHour = getRandomNumCust(min , max,avg);
for(var i=0 ; i<hours.length ; i++) {

this.numCustPerHour=math.floor(math.random()*(this.maxNumCustPerHour-this.minNumCustPerHour));
this.numCustPerHour=this.numCustPerHour+this.minNumCustPerHour;
var avgnum= this.numCustPerHour*this.avgNumCookPerCust;
this.numCook.push(avgnum)[i];

this.total=this.total+this.numCook[i];
console.log('total in seattleStore' , this.total);
console.log(numCookseattleStore.getNumCust(23, 65,6.3));
return(this.total);

}

return(this.getNumCust);

}


},

return(this.numCookseattleStore);


//numCookseattleStore.getNumCust();

//render : 
//function(){

   // var articleEl = document.createElement('article');
   // container.appendChild(articleEl);
    
    //var h1El = document.createElement('h1');
    //  articleEl.appendChild(h1El);
    //  h1El.textContent = 'number of cookies per shop';
   
   
      // Creates a container
     // var article = addElement('article', container);
      
      // Creates a table
     // var tableElem = addElement('table', article);
      
      // Creates a header row
      //var headerRowElem = addElement('tr', tableElem);
      
     // addElement('th', headerRowElem, ' ');
      
     // for (var i = 0; i < 14; i++) {
  //      addElement('th', headerRowElem, hours[i]);
    //  }
      
    //  addElement('th', headerRowElem, 'Daily Location Total');
      

// ADD BODY OF TABLE
//Store.prototype.render = function(container) {
   // var dataRowElem = addElement('tr', tableElem);
  
   // addElement('td', dataRowElem, this.name);
  
    
    
    // ***** This add total as last columm
   // addElement('td', dataRowElem, this.total);
  
  //}
  
  // Creates a footer row
 // var dataRowElemm2 = addElement('tr', tableElem);
  
  //addElement('td', dataRowElemm2, 'Totals');




//};


//console.table(numCookseattleStore);
//console.table(numCookseattleStore);
//numCookseattleStore.render();

*/



















































  


  
  
  
  
  