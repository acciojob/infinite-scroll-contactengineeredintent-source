//your code here!
let orderedList = document.querySelector("#infi-list");
let listItem = document.querySelectorAll(".list-item");
let loader = document.querySelector("#last-item");
//creating the observer
let i = 0;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      console.log("lets load more items");
      let count = 0;
      while (count < 2) {
        let currentItem = listItem[i].cloneNode(true);
        orderedList.appendChild(currentItem);
        count++;
        i++;
      }
      i = i % 10;
      observer.observe(orderedList.lastElementChild);
    }
  });
});
observer.observe(loader);
