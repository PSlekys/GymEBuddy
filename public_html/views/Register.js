const RegisterPage = (app) => {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Register
          </h1>
          <h2 class="subtitle">
            Register to start seeing gains
          </h2>
        </div>
      </div>
    </section>

    <div class="container">
      <form name="register">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" id="email" name="email" placeholder="alexsmith@gmail.com">
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" id="password" name="password" placeholder="Password">
          </div>
        </div>

        <div class="control">
          <button class="button is-primary">Register</button>
        </div>
      </form>
      <button class="button is-text" id="loglocation">Have an account? Login</button>
    </div>
  `;

  document.forms.register.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => alert("okay"));
  });

  document
    .getElementById("loglocation")
    .addEventListener("click", () => (location.hash = "#login"));
};

export default RegisterPage;
