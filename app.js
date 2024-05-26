const addBtn = document.querySelector(".add-item-btn");
const itemForm = document.querySelector(".item-form");
const discardedItemsBtn = document.querySelector(".discarded-btn");
const completedItemsBtn = document.querySelector(".completed-btn");
const activeItemsBtn = document.querySelector(".active-btn");
const itemCtn = document.querySelector(".item-ctn");

function openForm() {
    document.querySelector(".overlay").classList.remove("hidden");
}

let count = 2;

function subForm(event) {
    event.preventDefault();
    document.querySelector(".overlay").classList.add("hidden");
    console.log("submitted");

    const item = document.createElement("div");
    item.classList.add("item", "active", String(count));
    itemCtn.appendChild(item);
    
    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = document.querySelector(".item-title").value;
    item.appendChild(title);
    
    const desc = document.createElement("p");
    desc.classList.add("desc");
    desc.innerText = document.querySelector(".item-desc").value;
    item.appendChild(desc);
    
    const date = document.createElement("div");
    date.classList.add("date-ctn");
    
    const start = document.createElement("h2");
    start.classList.add("start-date", "date");
    start.innerText = document.querySelector(".item-start-date").value;
    date.appendChild(start);
    
    const end = document.createElement("h2");
    end.classList.add("end-date", "date");
    end.innerText = document.querySelector(".item-due-date").value;
    date.appendChild(end);
    
    item.appendChild(date);
    
    const utilityBtnCtn = document.createElement("div");
    utilityBtnCtn.classList.add("utility-btn-ctn");
    item.appendChild(utilityBtnCtn);
    
    const discardBtn = document.createElement("button");
    discardBtn.classList.add("discard-btn", "btn");
    discardBtn.innerText = "Discard";
    utilityBtnCtn.appendChild(discardBtn);
    
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn", "btn");
    completeBtn.innerText = "Mark As Complete";
    utilityBtnCtn.appendChild(completeBtn);
    
    count++;
    itemForm.reset();
}

function handleItemActions(event) {
    const item = event.target.closest(".item");
    if (event.target.classList.contains("discard-btn")) {
        item.style.display="none";
        item.classList.remove("active");
        item.classList.add("discarded");
        console.log(`Item ${item.classList[1]} discarded`);
    } else if (event.target.classList.contains("complete-btn")) {
        item.classList.remove("active");
        item.classList.add("completed");
        console.log(`Item ${item.classList[1]} marked as complete`);
    }
}

function filterItems(status) {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        if (status === "all" || item.classList.contains(status)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

addBtn.addEventListener("click", openForm);
itemForm.addEventListener("submit", subForm);
itemCtn.addEventListener("click", handleItemActions);

activeItemsBtn.addEventListener("click", () => filterItems("active"));
discardedItemsBtn.addEventListener("click", () => filterItems("discarded"));
completedItemsBtn.addEventListener("click", () => filterItems("completed"));

// Initially show all active items
// filterItems("active");
