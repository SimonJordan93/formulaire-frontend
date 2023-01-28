document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  // GESTRION DU FORMULAIRE
  document.querySelector("form").addEventListener("submit", async (event) => {
    // empêcher le refresh de la page aus submit
    event.preventDefault();
    console.log("submit");

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    console.log({
      firstname,
      lastname,
      email,
      subject,
      message,
    });

    // requête vers le serveur en local
    const { data } = await axios.post("http://localhost:3000/form", {
      firstname,
      lastname,
      email,
      subject,
      message,
    });

    console.log("response>>", data);
  });
});
