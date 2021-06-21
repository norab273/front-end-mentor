var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(number) {
  // This function will display the specified tab of the form ...
  var tab = document.getElementsByClassName("tab");
  tab[number].style.display = "block";
  if (number == tab.length - 1) {
    document.getElementById("nextBtn").innerHTML =
      "JE VEUX MON ESTIMATION GRATUITE &#x2794;";
  } else {
    document.getElementById("nextBtn").innerHTML = "SUIVANT &#x2794;";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(number);
}

function nextPrev(number) {
  // This function will figure out which tab to display
  var tab = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (number == 1 && !validateForm()) return false;
  // Hide the current tab:
  tab[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + number;
  // if you have reached the end of the form... :
  if (currentTab >= tab.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var tab,
    input,
    i,
    valid = true;
  tab = document.getElementsByClassName("tab");
  input = tab[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < input.length; i++) {
    // If a field is empty...
    if (input[i].value == "") {
      // add an "invalid" class to the field:
      input[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(number) {
  // This function removes the "active" class of all steps...
  var i,
    step = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    step[i].className = step[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  step[number].className += " active";
}
