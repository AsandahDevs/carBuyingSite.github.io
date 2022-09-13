//A function that changes the color of the heart-icon using javascript style property.
function colorChange(elm) {
  if (elm.style.color == "black") {
    return (elm.style.color = "red");
  } else {
    return (elm.style.color = "black");
  }
}

//Manipulating an achor tag attribute in html using 'setAttribute' method.
const carValuatorLink = document.getElementById("scriptOne");
carValuatorLink.setAttribute(
  "href",
  "https://www.autotrader.co.za/car-valuation"
);
carValuatorLink.setAttribute("target", "_blank");

const financeCalculatorLink = document.getElementById("scriptTwo");
financeCalculatorLink.setAttribute(
  "href",
  "https://www.wesbank.co.za/home/calculate"
);
financeCalculatorLink.setAttribute("target", "_blank");

const carFinanceLink = document.getElementById("scriptThree");
carFinanceLink.setAttribute(
  "href",
  "https://www.nedbank.co.za/content/nedbank/desktop/gt/en/personal/loans/vehicle-finance-mfc.html"
);
carFinanceLink.setAttribute("target", "_blank");

const carInsuranceLink = document.getElementById("scriptFour");
carInsuranceLink.setAttribute(
  "href",
  "https://www.oldmutualinsurance.co.za/products/car-insurance?UCID=OMSTIPERFMAX0001&gclid=CjwKCAjwopWSBhB6EiwAjxmqDTfXzUVD1uXL4vE5RSMv2YiK4BoTlaHGwOiXgJ0x6OteMi7hlzc8bRoCM04QAvD_BwE"
);
carInsuranceLink.setAttribute("target", "_blank");

const carVehicleCheckLink = document.getElementById("scriptFive");
carVehicleCheckLink.setAttribute("href", "https://www.vehiclecheck.co.za/");
carVehicleCheckLink.setAttribute("target", "_blank");

//A function to perfom a filtering operation.
function searchFilter() {
  let searchBoxValue = document.getElementById("searcher").value;
  let cards = document.querySelectorAll(".card");
  Array.from(cards).forEach((card) => {
    if (card.textContent.toLowerCase().includes(searchBoxValue.toLowerCase())) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

//An eventlistener that will 'listen' to any user inputs in order to invoke the 'searchFilter' function.
document.getElementById("searcher").addEventListener("input", searchFilter);

//A function that will filter content based on the currently selected option in the dropdown lists
function minimumPriceFilter() {
  let minPriceValue = document.getElementById("min-price").value;
  let cards = document.querySelectorAll(".card");
  Array.from(cards).forEach((card) => {
    if (card.textContent.toLowerCase().includes(minPriceValue.toLowerCase())) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

document
  .getElementById("min-price")
  .addEventListener("change", minimumPriceFilter); // the change event will listen for any 'change in value' made to the minimum price dropdown menu.

function maximumPriceFilter() {
  let maxPriceValue = document.getElementById("max-price").value;
  let cards = document.querySelectorAll(".card");
  Array.from(cards).forEach((card) => {
    if (card.textContent.toLowerCase().includes(maxPriceValue.toLowerCase())) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

document
  .getElementById("max-price")
  .addEventListener("change", maximumPriceFilter); // the change event will listen for any 'change in value',which are options selected by the user, to the maximum price dropdown menu.

function locationFilter() {
  let selectedLocation = document.getElementById("Location").value;
  let cards = document.querySelectorAll(".card");
  Array.from(cards).forEach((card) => {
    if (
      card.textContent.toLowerCase().includes(selectedLocation.toLowerCase())
    ) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

document.getElementById("Location").addEventListener("change", locationFilter); // the change event will listen for any 'change in value',which are options selected by the user, to the location dropdown menu.

function bodyTypeFilter() {
  let selectedBodyType = document.getElementById("Body-type").value;
  let cards = document.querySelectorAll(".card");
  Array.from(cards).forEach((card) => {
    if (
      card.textContent.toLowerCase().includes(selectedBodyType.toLowerCase())
    ) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

document.getElementById("Body-type").addEventListener("change", bodyTypeFilter); // the change event will listen for any 'change in value', which are options selected by the user, to the body-type dropdown menu.

//*selecting the target elements for our observer API
const targetElements = document.querySelectorAll(".card.m-2");

//* constructing our intersectionObserverAPI object
const options = {
  root: null, // the root element when set to null allows the browser to use the document's viewport to watch for intersections.
  rootMargin: "0px",
  threshold: 0, // specifies the distance between the root element and the target element. 0 means as soon as a single pixel of the target element becomes visible in the document's viewport , an event needs to be triggered.
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft");
    }
  });
};
const observer = new IntersectionObserver(handleIntersection, options);

/*
 The below code watches for changes between the root element and each target element.
It is important to note that our observe method watches a single element at a time , 
therefore we have to loop through our array of target elements.
*/

targetElements.forEach((targetElement) => {
  observer.observe(targetElement);
});
