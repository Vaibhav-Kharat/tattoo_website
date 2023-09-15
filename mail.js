const firebaseConfig = {
  apiKey: "AIzaSyCNxaOKEfo3cR4lqdIDFyFvIoCrIVGlU3g",
  authDomain: "contactform-f6bf4.firebaseapp.com",
  databaseURL: "https://contactform-f6bf4-default-rtdb.firebaseio.com",
  projectId: "contactform-f6bf4",
  storageBucket: "contactform-f6bf4.appspot.com",
  messagingSenderId: "695385736618",
  appId: "1:695385736618:web:280fb7bfb8218a5c1c97d3"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();


  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var area = document.getElementById("area").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zipcode = document.getElementById("zipcode").value;

  saveMessages(name, phone, email, date, area, city, state, zipcode);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, phone, email, date, area, city, state, zipcode) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    phone: phone,
    email: email,
    date: date,
    area: area,
    city: city,
    state: state,
    zipcode: zipcode,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};