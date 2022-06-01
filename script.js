var pos = 0,
 test, test_status, questions,
 choice, choices, chA, chB, chC,
 correct = 0;

var questions = [

 ["Who was the first student to gain admission into kwara State Polytechnic?",
  "Abiodun Oluwafemi",
  "Abdulkareem Habeeb",
  "Ojo Abiodun", "A"
 ],

 ["In which year did Kwarapoly have its first building",
  "1332", "1525", "1782", "B"
 ],

 ["What is the name of the bricklayer that first picked up the shovel?",
  "Baba Akowe", "Baba Latin",
  "Baba Ijesha", "A",
 ],

 ["What is the title of the first fellowship sermon held in school?",
  "How to make it",
  "Who wants to be a millionaire",
  "Mobile Banking", "B",
 ],

 ["Who preached during the first student fellowship service",
  "Bro Theo", "Blessing Oyedamola",
  "Arome Osayi", "A"
 ],

 ["Who invented the slang 'Agba'",
  "Quadri Eco", "Bori Adebiyi",
  "Abbey Ojo", "B"
 ],

 ["Who invented the slang 'Boss'",
  "Segun Gbadebo", "Akinola kazeem",
  "Olayeni Tosin", "B"
 ],

 ["Who was the first student to carry expo?",
  "Kareem Dolapo", "Juju Olawobi",
  "Pastor",
  "A"
 ],

 ["What was the name of the firstborn of the first Kwarapoly rector?",
  "Abosede Adio", "Bolaji Aminat",
  "Isaac Newton", "A"
 ],

 ["Who hacked the first school portal?",
  "DJ Cafe", "Mr Panel",
  "God Almighty", "A"
 ],

 ["Who first trekked from school gate to campus",
  "Ajayi Seun", "Akindele Tolulope",
  "Bayo Omolola", "A"
 ],

 ["Who was the first student to withdraw from school bank?",
  "Akinyemi Albert",
  "Pelumi Victoria", "Antidote",
  "A"
 ],

 ["Who was the first yahoo boy in Kwarapoly?",
  "Ogunkoya Adedeji",
  "Ajagbe Dolapo",
  "Murphy Afolabi", "B"
 ],

 ["What is the name of the first lecturer in Kwarapoly?",
  "Mr Usman", "Wole Soyinka",
  "Oga Bello", "B"
 ],

 ["In the history of the school, which student uploaded the first WhatsApp status?",
  "Adekanmi Musbau",
  "Fatai Aromire", "Sif",
  "A"
 ],

 ["Who was the first student to have his phone ring during a lecture?",
  "Adebisi Afolayan",
  "Abass Akande", "Aba Shehu", "B"
 ],

 ["Who was the first student to skip a class?",
  "Adeyemo Oluwasegun",
  "Joel Akande", "Ounje Eco", "C"
 ],

 ["What is your ambition in school?",
  "Yahoo boy", "Olosho", "Cultist",
  "C"
 ],

 ["What is your preference in women?",
  "Boobs",
  "Butt", "Face", "B"
 ],

 ["Who was the first class rep in Kwarapoly?",
  "Dennis Ritchie", "Daniel Akanmu",
  "VeeBoy", "C"
 ]

];

function _(x) {

 return document.getElementById(x);

}

function renderQuestion() {

 test = _("test");

 if (pos >= questions.length) {

  test.innerHTML = "<h3>You got " +
   correct + " of " + questions
   .length +
   " questions correct. <br>SEE YOUR LIFE, OLODO BURÚKÚ ÀFI OÚNJẸ 😡😡😡</h3>";

  _("test_status").innerHTML =
   "Exam Completed";

  pos = 0;

  correct = 0;

  return false;

 }

 _("test_status").innerHTML =
  "Question " + (pos + 1) + " of " +
  questions.length;

 question = questions[pos][0];

 chA = questions[pos][1];

 chB = questions[pos][2];

 chC = questions[pos][3];





 test.innerHTML = "<h3>" + question +
  "</h3>";

 test.innerHTML +=
  "<input type='radio' name='choices' value='A'> " +
  chA + "<br>";

 test.innerHTML +=
  "<input type='radio' name='choices' value='B'> " +
  chB + "<br>";

 test.innerHTML +=
  "<input type='radio' name='choices' value='C'> " +
  chC + "<br><br>";



 test.innerHTML +=
  "<button onclick='checkAnswer()'>Submit Answer</button>";

}

function checkAnswer() {

 choices = document
  .getElementsByName("choices");

 for (var i = 0; i < choices
  .length; i++) {

  if (choices[i].checked) {

   choice = choices[i].value;

  }

 }

 if (choice == questions[pos][4]) {

  correct++;

 }

 pos++;

 renderQuestion();

}

window.addEventListener("load",
 renderQuestion, false);