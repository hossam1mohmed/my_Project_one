function time() {
  var current_time = new Date();
  var l_current_time = current_time.toLocaleTimeString();
  document.getElementById("Time").innerHTML = l_current_time;
}

setInterval(time, 500);
