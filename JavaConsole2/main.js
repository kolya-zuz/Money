// Задача 1.

let number = prompt("Введите ваше число")
let remaint = number % 2
if (remaint == 0) {
    console.log ("Ваше число четное")}
else {console.log("Ваше число нечетное")}



// Задача 2.

age = prompt("Введите ваш возраст")
const discount = age > 18 && age < 66 ? 20 :
                age < 18 ? 10 : 30
console.log(`Ваша скидка составляет ${discount}%`)

switch (true) {
  case age < 18:
    console.log("Ваша скидка составляет 10%");
    break;

  case age >= 18 && age <= 65:
    console.log("Ваша скидка составляет 20%");
    break;

  case age > 65:
    console.log("Ваша скидка составляет 30%");
    break;}



// Задача 3.

username = prompt("Введите ваш логин")
if (username == "admin" || username == "user") { password = prompt("Введите ваш пароль")}
else {console.log("Доступ запрещен")}
if (password == 123456) {console.log("Доступ разрешен")}
else {console.log("Доступ запрещен")}