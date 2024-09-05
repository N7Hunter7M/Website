function toggleDropdown(dropdownId, element) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.classList.contains('dropdown-active')) {
      dropdown.classList.remove('dropdown-active');
    } else {
      dropdown.classList.add('dropdown-active');
    }
    var arrow = element.querySelector('.arrow');
    
    // Toggle dropdown visibility (you can implement your dropdown toggle logic here)
    dropdown.classList.toggle('open');
    
    // Change the arrow based on the dropdown state
    if (dropdown.classList.contains('open')) {
        arrow.innerHTML = 'v';  // Arrow pointing down
    } else {
        arrow.innerHTML = '>';  // Arrow pointing right
    }
  }