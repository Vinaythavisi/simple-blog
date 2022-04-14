let signup = document.querySelector("#signup");
let write = document.querySelector("#write");
let body = document.querySelector("body");
let signupbtn = document.querySelector("#id02");
let jumpLogin = document.querySelector("#log");
let loginbtn = document.querySelector("#id01");
let signupform = document.querySelector("#signupform");
let editorBtn = document.querySelector(".editor");
let googleSignupBtn = document.querySelector(".g-signin2");
let home = document.querySelector(".content");
let mainHome = document.querySelector(".main-container");
let editor = document.querySelector(".main-container-editor");
let backBtn = document.querySelector("#back");
let signback = document.querySelector("#sign");
let publishBtn = document.querySelector("#publishBtn");
let loaderBtn = document.querySelector(".loader-div");
let loader = document.querySelector(".loader");
let extra = document.querySelector(".extra");
var heading = document.querySelector(".heading-blog");
let category = document.querySelector(".category");
var blog_type = document.querySelector("#blog-type");
var blogText = document.querySelector(".input");
var authorName = document.querySelector(".authorinput");
var blog_name = document.querySelector(".name_blog");
// signup and login
// let flag = false;

let codingblogs = [];
let foodblogs = [];
let travelblogs = [];
let beautyblogs = [];


codingblogs = [
  {
    Name: "Java Constructor",
    topictext: "This is a blog on java constructor",
    author: "~ vinay thavisi",
    text: `In this Java tutorial, we are going to discuss everything that you must know about a Constructor in Java. Constructor in Java is a block of code that creates an object. We can also call it an Object Builder.They are similar to methods in Java but they differ from methods in the fact that they do not have a return type like methods.
    
    In this article, we will learn what a constructor is, the need for constructors, its types, and the rules for writing constructors in Java. We will also cover some other topics like Constructor Overloading and Constructor Chaining.
    
    We will also see how the methods are different from the constructors in Java. A Constructor is a member function which has the same name as its class and is used to initialize the object of that class type with the legal initial value.”

    A constructor is a member function of a class that is called for initializing objects when we create an object of that class. It is a special type of method that instantiates a newly created object and just after the memory allocation of this object takes place, the constructor is called.`,
  },
  {
    Name: "Python",
    topictext: "This is a blog on python constructor",
    author: "~ vinay thavisi",
    text: `In this Java tutorial, we are going to discuss everything that you must know about a Constructor in Java. Constructor in Java is a block of code that creates an object. We can also call it an Object Builder.They are similar to methods in Java but they differ from methods in the fact that they do not have a return type like methods.
    
    In this article, we will learn what a constructor is, the need for constructors, its types, and the rules for writing constructors in Java. We will also cover some other topics like Constructor Overloading and Constructor Chaining.
    
    We will also see how the methods are different from the constructors in Java. A Constructor is a member function which has the same name as its class and is used to initialize the object of that class type with the legal initial value.”

    A constructor is a member function of a class that is called for initializing objects when we create an object of that class. It is a special type of method that instantiates a newly created object and just after the memory allocation of this object takes place, the constructor is called.`,
  },
];
travelblogs = [
  {
    Name: "Travel Blog1",
    topictext: "I love travelling.... read this blog to know my journey",
    author: " ~ vinay thavisi",
    text: ""
  },
  {
    Name: "Travel Blog2",
    topictext: "I love travelling.... read this blog to know my journey",
    author: " ~ rashmika",
    text: ""
  }
];
foodblogs = [
  {
    Name: "Burger",
    topictext: "My yummy experience of burgers on various places",
    author: "~pawan",
    text: ""
  },
  {
    Name: "Chilli Potato",
    topictext: "Let's see whats happens when I ate chilli potato first time",
    author: "~ farrok",
    text: ""
  }
];
beautyblogs = [
  {
    Name: "Saloon",
    topictext: "my experience of the the best saloon",
    author: "~ aj style",
    text: ""
  },
  {
    Name: "Face cream",
    topictext: "My best ever favourite face cream",
    author: "~ bobbulu",
    text: ""
  },
]


blog_type.onchange = function () {
  category.value = blog_type.value;
}

write.addEventListener("click", function () {
  mainHome.style.display = "none";
  editor.style.display = "block";

  loaderBtn.style.display = "none";
  loader.style.display = "none";
});

// write.addEventListener("click", (e) => {
// e.preventDefault();

backBtn.addEventListener("click", function () {
  editor.style.display = "none";
  mainHome.style.display = "block";
  editorBtn.style.display = "none";
});
// });

let output = document.querySelector(".input");
let buttons = document.getElementsByClassName("menu-icon");
let fonts = document.getElementById("font-size");
let p;
for (let btn of buttons) {
  btn.addEventListener("click", () => {
    let cmd = btn.dataset["command"];
    if (cmd == "createlink") {
      let url = prompt("Enter the link here: ", "http://");
      document.execCommand(cmd, false, url);
    } else {
      document.execCommand(cmd, false, null);
    }
  });
}

publishBtn.addEventListener("click", function () {
  if (blogText.value == "") {
    alert("Please write something to publish....!");
    return;
  }
  loaderBtn.style.display = "block";
  loader.style.display = "block";

  var obj = {
    Name: blog_name.value,
    topictext: heading.value,
    author: authorName.value,
    text: blogText.value
  }
  console.log(obj)
  if (blog_type.value == "Coding") {
    codingblogs.push(obj);
  } else if (blog_type.value == "Food") {
    foodblogs.push(obj);
  } else if (blog_type.value == "Travel") {
    travelblogs.push(obj);
  } else {
    beautyblogs.push(obj);
  }

  setTimeout(() => {
    editor.style.display = "none";
    mainHome.style.display = "block";
  }, 2000);
});

let coding = document.querySelector("#coding");
let food = document.querySelector("#food");
let travel = document.querySelector("#travel");
let beauty = document.querySelector("#beauty");
let mainHead = document.querySelector(".heading");







coding.addEventListener("click", function () {
  coding.classList.add("select");
  food.classList.remove("select");
  travel.classList.remove("select");
  beauty.classList.remove("select");
  home.innerHTML = "";
  var c = '';
  for (var i = 0; i < codingblogs.length; i++) {
    c += ` <div class="article" id="arts="article" id="art-1">
<h2>${codingblogs[i].Name}</h2>
<div class="para-text"><p>${codingblogs[i].topictext}</p></div>
<h3>${codingblogs[i].author}</h3>
</div> `
  }

  home.innerHTML = `<div class="all-articles">
${c} </div>`;
  let art = document.querySelector(".article");
  art.addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("bigBlog");
    div.innerHTML = `<textarea class="blogtext" disabled>
            ${codingblogs[0].text}
            </textarea>`;
    home.appendChild(div);
  });

});

food.addEventListener("click", function () {
  food.classList.add("select");
  coding.classList.remove("select");
  travel.classList.remove("select");
  beauty.classList.remove("select");
  home.innerHTML = "";
  var c = '';
  for (var i = 0; i < foodblogs.length; i++) {
    c += `<div class="article" id="art-1">
    <h2>${foodblogs[i].Name}</h2>
    <div class="para-text"><p>${foodblogs[i].topictext}</p></div>
    <h3>${foodblogs[i].author}</h3>
</div>`
  }
  home.innerHTML = `<div class="all-articles">
     ${c}
</div>`;
});

travel.addEventListener("click", function () {
  travel.classList.add("select");
  food.classList.remove("select");
  coding.classList.remove("select");
  beauty.classList.remove("select");
  home.innerHTML = "";
  var c = '';
  for (i = 0; i < travelblogs.length; i++) {
    c += ` <div class="article" id="art-1">
    <h2>${travelblogs[i].Name}</h2>
    <div class="para-text"><p>${travelblogs[i].topictext} </p></div>
    <h3>${travelblogs[i].author}</h3>
</div>`
  }
  home.innerHTML = `<div class="all-articles">
   ${c}
</div>`;
});

beauty.addEventListener("click", function () {
  beauty.classList.add("select");
  food.classList.remove("select");
  travel.classList.remove("select");
  coding.classList.remove("select");
  home.innerHTML = "";
  var c = '';
  for (var i = 0; i < beautyblogs.length; i++) {
    c += ` <div class="article" id="art-1">
    <h2>${beautyblogs[i].Name}</h2>
    <div class="para-text"><p>${beautyblogs[i].topictext} </p></div>
    <h3>${beautyblogs[i].author}</h3>
</div>`
  }
  home.innerHTML = `<div class="all-articles">
   ${c}
</div>`;
});

mainHead.addEventListener("click", function () {

  beauty.classList.remove("select");
  food.classList.remove("select");
  travel.classList.remove("select");
  coding.classList.remove("select");
  let str = `The first thing you learn when you’re blogging is that people are one click away from leaving
    you. So you’ve got to get to the point, you can’t waste people’s time, you’ve got to give them
    some value for their limited attention span`;
  let auth = "~ Alex Tabarrok";
  home.innerHTML = `<div class="image-content">
    <div class="left-side"><img src="../Images/coding.jpg"></div>
    <div class="right-side">
        <div class="image"><img src="../Images/travel.jpg"></div>
        <div class="image"><img src="../Images/food.jpg"></div>
    </div>
</div>
<div class="quotes">
    "${str}
    <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ${auth};
</div>`;
});