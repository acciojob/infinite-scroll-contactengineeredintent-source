//your code here!
let orderedList = document.querySelector("#infi-list");
let listItem = document.querySelectorAll(".list-item");
let loader = document.querySelector("#loader");
//creating the observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log("lets load more items");
      for (let i = 0; i < listItem.length; i++) {
        let currentItem = listItem[i].cloneNode(true);
        orderedList.appendChild(currentItem);
      }
    }
  });
});
observer.observe(loader);


