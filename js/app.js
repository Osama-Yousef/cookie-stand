
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
