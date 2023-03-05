const loginForm = document.getElementById("login-form");

const URL = "http://localhost:3000";
const SessionKey = "Algo_Session";

/**
 * Handle Login
 */
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const regex =
    /^([0-9]+)([A-Za-z]+)([0-9]+)\.([A-Za-z]+)@sagarmatha\.edu\.np$/;
  if (!regex.test(email)) {
	const errEmail = document.getElementById("lbltext")
	errEmail.style.visibility = "visible"
    return;
  }

  const reqParams = {
    email,
    password,
  };

  try {
    const response = await fetch(`${URL}/api/employee/store`, {
      method: "POST",
      //  mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqParams),
    });

    if (response) {
      /**
       * Route user to another authenticated page
       */
      localStorage.setItem(SessionKey, response?.data?.token);
      window.location.href = "index.html";
    }
  } catch (error) {
    // Show error message
    console.log("Error: ", error.message);
  }
});
