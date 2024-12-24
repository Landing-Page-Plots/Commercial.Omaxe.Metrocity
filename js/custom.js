let isFormSubmitted = false; // Track if the form has been submitted

// Function to show success message and hide it after 4 seconds
function showSuccessPopup(message) {
  const successPopup = document.getElementById("successPopup");
  successPopup.textContent = message; // Set the success message
  successPopup.style.display = "flex"; // Show the popup
  setTimeout(() => {
    successPopup.style.display = "none"; // Hide the popup after 4 seconds
  }, 4000);
}

// Function to handle form submission
function handleFormSubmission(event, formId) {
  event.preventDefault(); // Prevent the default form submission behavior

  if (isFormSubmitted) {
    showSuccessPopup("Aapka form already submit ho chuka hai. Hum aap se jaldi sampark karenge.");
    return;
  }

  const form = document.getElementById(formId);
  const formData = new FormData(form);

  // Submit form data to Google Sheets
  fetch("https://script.google.com/macros/s/AKfycbzxrr7MTnVRNcOArrV5yW7KwiTpXkUEgb7DCu4xZVrxsIN-qP0SF-NI3gEo_8Js7dV61w/exec", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        isFormSubmitted = true; // Mark the form as submitted
        showSuccessPopup("Aapka form successfully submit ho chuka hai! Hum aap se jaldi sampark karenge."); // Show success message
        document.getElementById(formId).reset(); // Reset the form
        closePopup(); // Close the popup
      } else {
        throw new Error("Form submission failed.");
      }
    })
    .catch((error) => {
      alert("Form submit karte waqt error aaya: " + error.message); // Show error message
    });
}

// Function to disable all forms after submission (optional, based on requirement)
function disableForms() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, textarea, button");
    inputs.forEach((input) => {
      input.disabled = true; // Disable all form elements
    });
  });
}

// Function to open the popup
function showPopup() {
  if (!isFormSubmitted) {
    document.getElementById("popupForm").style.display = "flex";
  }
}

// Function to close the popup
function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

// Attach form submission handlers
document.getElementById("contactForm").onsubmit = function (event) {
  handleFormSubmission(event, "contactForm");
};

// Start popup interval (if needed)
setInterval(showPopup, 10000); // Show the popup every 10 seconds (if not submitted)

//pop up Form end here

// Basic Contact Form handing 
document.getElementById("contactForm1").onsubmit = function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const form = event.target; // Reference to the form
    const formData = new FormData(form); // Collect form data
  
    // Submit the form data to Google Sheets
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          // Show success message
          document.getElementById("successMessage").style.display = "block";
          // Reset the form
          form.reset();
          // Hide the message after 4 seconds
          setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
          }, 4000);
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };
  
// Basic Contact from End Here  

// Open popup on a button click (instead of interval)
console.log("JavaScript is loaded on this page");

document.getElementById("openPopupButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior (like navigation)
    showPopup(); // Show the popup
  });
  

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(26.850000, 80.949997),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


