function openTab(evt, TabId) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabId).style.display = "block";
  evt.currentTarget.className += " active";
}

// Execute on page load
function codeOnLoad() {
  document.getElementById('Two').style.display = 'none';
  document.getElementById('Three').style.display = 'none';
}
window.onload = codeOnLoad