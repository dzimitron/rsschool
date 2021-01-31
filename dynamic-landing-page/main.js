(function() {

  // Create DOM Elements
  let doc = document,
    time = doc.createElement('time'),
    toggle = doc.createElement('div'),
    h1 = doc.createElement('h1'),
    greeting = doc.createElement('span'),
    name = doc.createElement('span'),
    question = doc.createElement('h2'),
    focus = doc.createElement('h2'),

    timeContent = doc.createTextNode(''),
    toggleContent = doc.createTextNode(''),
    questionContent = doc.createTextNode('What Is Your Focus For Today?'),
    nameContent = doc.createTextNode(''),
    focusContent = doc.createTextNode('');
  
  name.contentEditable = 'true';
  focus.contentEditable = 'true';

  question.append(questionContent);

  doc.body.append(time);

  time.parentElement.append(toggle);
  time.parentElement.append(h1);
  h1.append(greeting);
  h1.append(name);
  
  time.parentNode.append(question);
  time.parentNode.append(focus);

// Options 12h/24h Format
let showAmPm = true;
toggle.addEventListener('click', () => showAmPm = !showAmPm);


// Show Time
function showTime() {
  let today = new Date(),
  // let today = new Date(2021, 0, 1, 19, 20, 0, 0),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12h Format
  hour = showAmPm ? hour % 12 || 12 : hour;
  toggle.innerHTML = showAmPm ? '12h' : '24h';
  
  // Output Time
  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (n < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
  // let today = new Date(2021, 0, 1, 19, 20, 0, 0),
    hour = today.getHours();

  if (hour < 12) {
    doc.body.style.backgroundImage = "url('img/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    doc.body.style.backgroundImage = "url('img/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    doc.body.style.backgroundImage = "url('img/evening.jpg')";
    greeting.textContent = 'Good Evening, ';
    doc.body.style.color = 'White';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') == null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();  
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getfocus() {
  if (localStorage.getItem('focus') == null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();  
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getfocus();

})();