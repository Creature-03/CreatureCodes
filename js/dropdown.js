    //  When the user clicks on the button, 
    // toggle between hiding and showing the dropdown content 
    function myFunction() {
        document.getElementById("dropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks on the menu button
      window.onclick = function(e) {
          if (!e.target.matches('.dropdownbtn')) {
          var dropdown = document.getElementById("dropdown");
              if (dropdown.classList.contains('show')) {
              myDropdown.classList.remove('show');
              }
          }
      }