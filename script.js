let orderedList = document.querySelector("#infi-list");
// let listItem = document.querySelectorAll(".list-item");
let loader = document.querySelector("#last-item");
//creating the observer
let i = 11;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      console.log("lets load more items");
      let count = 0;
      while (count < 2) {
        let listItem = document.createElement("li");
        listItem.textContent = `Item ${i}`;
        orderedList.appendChild(listItem);
        count++;
        i++;
      }
      observer.observe(orderedList.lastElementChild);
    }
  });
});
observer.observe(loader);

