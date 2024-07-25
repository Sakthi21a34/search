function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const countryDivs = div.querySelectorAll("div:not(:first-child)"); 
    for (let i = 0; i < countryDivs.length; i++) {
      const txtValue = countryDivs[i].textContent || countryDivs[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        countryDivs[i].style.display = "";
      } else {
        countryDivs[i].style.display = "none";
      }
    }
  }
  
  function selectCountry(country) {
    document.getElementById("dropBtn").innerText = `Country: ${country}`;
    document.getElementById("myDropdown").classList.remove("show");
  }