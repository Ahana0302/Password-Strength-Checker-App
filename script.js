function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strengthBar = document.getElementById("strength-bar");
  const feedback = document.getElementById("feedback");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  let strengthLevel;
  let color;

  switch (strength) {
    case 0:
    case 1:
      strengthLevel = "Weak";
      color = "#ff4d4d";
      break;
    case 2:
    case 3:
      strengthLevel = "Moderate";
      color = "#ffcc00";
      break;
    case 4:
    case 5:
      strengthLevel = "Strong";
      color = "#4CAF50";
      break;
  }

  strengthBar.style.width = `${(strength / 5) * 100}%`;
  strengthBar.style.backgroundColor = color;
  feedback.textContent = `Strength: ${strengthLevel}`;
}
