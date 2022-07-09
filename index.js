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

let options = document.getElementsByTagName("option");
for (let i = 0; i < options.length; i++) {
  console.log(options[i].value); // work-in-progress
}

//A function to perfom a filtering operation.
function searchFilter() {
  let searchBoxValue = document.getElementById("searcher").value;
  let cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    if (
      cards[i].textContent.toLowerCase().includes(searchBoxValue.toLowerCase())
    ) {
      cards[i].classList.remove("hidden");
    } else {
      cards[i].classList.add("hidden");
    }
  }
}

//An eventlistener that will 'listen' to any user inputs in order to invoke the 'searchFilter' function.
document.getElementById("searcher").addEventListener("input", searchFilter);
