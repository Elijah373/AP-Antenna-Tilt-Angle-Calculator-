function calculateTilt() {
  const h_ap = parseFloat(document.getElementById("h_ap").value);
  const h_t = parseFloat(document.getElementById("h_t").value);
  const d = parseFloat(document.getElementById("d").value);

  const base_h = (h_ap - h_t) / d;
  const radian_answer = Math.atan(base_h);
  const degrees_answer = radian_answer * (180 / Math.PI);

  document.getElementById("output").textContent =
    `The antenna tilt angle is: ${degrees_answer.toFixed(2)} degrees`;
}
