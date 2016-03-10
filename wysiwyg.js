var person = document.getElementById("person");
var input = document.getElementById("userInput");

//Create an array of objects that represents famous people
var people = [
  {
    title: "Musician",
    name: "Bob Dylan",
    bio: "Bob Dylan is an American singer-songwriter, artist and writer. He has been influential in popular music and culture for more than five decades.",
    image: "http://i4.mirror.co.uk/incoming/article1322620.ece/ALTERNATES/s615/RAY%20BAN%20BOB%20DYLAN.jpg",
    lifespan: {
      birth: 1941,
      death: "Currently Alive"
    }
  },
  {
    title: "Musician",
    name: "Tom Waits",
    bio: 'Tom Waits is an American singer-songwriter, composer, and actor. Waits has a distinctive voice, described by critic Daniel Durchholz as sounding like "it was soaked in a vat of bourbon, left hanging in the smokehouse for a few months, and then taken outside and run over with a car."',
    image: "http://static1.squarespace.com/static/5293da1de4b05f6cdadc3131/529fa0c6e4b00096a05e89f1/52a66b44e4b06a6d08d7480e/1386638150225/TomWaits_01.jpg",
    lifespan: {
      birth: 1949,
      death: "Currently Alive"
    }
  },
  {
    title: "Musician",
    name: "Johnny Cash",
    bio: "Johnny Cash was an American singer-songwriter, guitarist, actor, and author, who was widely considered one of the most influential musicians of the 20th century and one of the best-selling music artists of all time, having sold more than 90 million records worldwide.",
    image: "http://vignette2.wikia.nocookie.net/simpsons/images/b/bf/103947-johnny_cash_617_409.jpg/revision/latest?cb=20111104090558",
    lifespan: {
      birth: 1932,
      death: 2003
    }
  },
  {
    title: "Musician",
    name: "Loretta Lynn",
    bio: "Loretta Lynn is a multiple gold album American country music singer-songwriter whose work spans almost 60 years.",
    image: "http://www.cmt.com/sitewide/assets/img/artists/lynn_loretta/getty/74282205-x600.jpg",
    lifespan: {
      birth: 1932,
      death: "Currently Alive"
    }
  },
  {
    title: "Musician",
    name: "Willie Nelson",
    bio: "Willie Nelson is an American musician, singer, songwriter, author, poet, actor, and activist.",
    image: "https://i.ytimg.com/vi/Cmul7jUyWRg/maxresdefault.jpg",
    lifespan: {
      birth: 1933,
      death: "Currently Alive"
    }
  }
];

//Create a DOM element for each of the objects inside the container. Style your person elements however you like.
for (i = 0; i < people.length; i++) {
  person.innerHTML += "<div class = 'personCard'>" + `<h1>${people[i].name}</h1>` + `<h3>${people[i].title}</h3>` + `<p id="bio">${people[i].bio}<p>` + "<img src=" + people[i].image + ">" + `<text>${people[i].lifespan.birth}<text>` + " - " + `<text>${people[i].lifespan.death}<text>` + "</div>";
}
var personEl = document.getElementsByClassName("personCard");
//When you click on one of the person elements, a dotted border should appear around it.
var childrenEl = person.childNodes;
for (i = 0; i < people.length; i++) {
  childrenEl[i].addEventListener("click", function(event) {
    var childEl = event.target.closest("div");
    childEl.classList.toggle("dotted")
//When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
    document.forms["myForm"].elements["userInput"].focus();
    bioText(childEl.childNodes[2]);
  })
};


//When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
function bioText(swap) {
  input.addEventListener("keyup", function(event) {
    var text = input.value;
    swap.innerHTML = text;
  })
}









