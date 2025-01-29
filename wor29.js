function showPage(page) {
  const content = document.getElementById("content");
  content.innerHTML = `<h2>${page.charAt(0).toUpperCase() + page.slice(1)} Page</h2><div class='list' id='list'></div>`;
  
  if (page === "users") {
      fetchData("https://jsonplaceholder.typicode.com/users");
  } else if (page === "posts") {
      fetchData("https://jsonplaceholder.typicode.com/posts");
  } else if (page === "comments") {
      fetchData("https://jsonplaceholder.typicode.com/comments");
  }
}

//Завдання 5  Візьміть будь яку лекцію по ООП, додайте застосування call, apply, bind
//call
function hello() {
  console.log('Hello i am ' + this.name);
}

let user = { name: 'Olena' };
hello.call(user)

//apply
function intr(city, age) {
  console.log('My name is ' + this.name + ', my age is ' + age + ', my place is ' + city);
  
}

intr.apply(user, ['Lviv', 15])

//bind
let nHello = hello.bind(user);
nHello()
