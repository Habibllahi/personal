document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let sender = document.querySelector("#sender");
  let email = document.querySelector("#email");
  let message = document.querySelector("#message");
  let formBtn = document.querySelector("#form-btn");

  let data = {
    sender: sender.value,
    email: email.value,
    message: message.value,
  };

  // Disable form fields
  sender.setAttribute("disabled", "disabled");
  email.setAttribute("disabled", "disabled");
  message.setAttribute("disabled", "disabled");
  formBtn.setAttribute("disabled", "disabled");
  // Add spinner to submit form
  const spinner = document.createElement("p");
  spinner.className = "spinner";
  formBtn.textContent = "";
  formBtn.appendChild(spinner);

  // Form Submission
  const url = "https://usebasin.com/f/7f5480edabab.json";

  fetch(url, {
    headers: { "Content-Type": "application/json;charset=utf-8" },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        resHandler({ res: "Message successfully sent!" });
      }
    })
    .catch((e) =>
      resHandler({
        res:
          "There was an error sending your message. Please, try again letter.",
        type: "error",
      })
    );

  function resHandler({ res, type }) {
    // Clear all entries and remove disabled attribute
    sender.value = email.value = message.value = "";
    sender.removeAttribute("disabled");
    email.removeAttribute("disabled");
    message.removeAttribute("disabled");
    formBtn.textContent = "Send Message";
    formBtn.removeAttribute("disabled");

    // Append response message
    let responsePanel = document.createElement("p");
    responsePanel.id = "response-panel";
    responsePanel.textContent = res;
    responsePanel.style.color = "white";
    responsePanel.style.marginBottom = "1rem";

    if (type === "error") {
      responsePanel.style.color = "red";
    }

    document.querySelector(".form-action").insertBefore(responsePanel, formBtn);

    // Remove response message after 3s
    setTimeout(() => {
      document
        .querySelector("#response-panel")
        .parentElement.removeChild(document.querySelector("#response-panel"));
    }, 3000);
  }
});
