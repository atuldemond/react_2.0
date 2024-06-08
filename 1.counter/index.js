const basket1 = document.querySelector(".count");
const basket2 = document.querySelector(".count2");
const rightarrow = document.querySelector(".rightarrow");
const leftarrow = document.querySelector(".leftarrow");

let totalApple = 10;
let secondBasketApplecount = 0;
let FirstBasketApplecount = totalApple - secondBasketApplecount;

basket1.innerText = FirstBasketApplecount;
basket2.innerHTML = secondBasketApplecount;

rightarrow.addEventListener("click", () => {
  if (FirstBasketApplecount > 0) {
    FirstBasketApplecount--;
    basket1.innerText = FirstBasketApplecount;
    secondBasketApplecount++;
    basket2.innerHTML = secondBasketApplecount;
  }
});

leftarrow.addEventListener("click", () => {
  if (secondBasketApplecount > 0) {
    FirstBasketApplecount++;
    basket1.innerText = FirstBasketApplecount;
    secondBasketApplecount--;
    basket2.innerHTML = secondBasketApplecount;
  }
});
