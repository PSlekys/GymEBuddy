const LoginPage = (app) => {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Login
          </h1>
          <h2 class="subtitle">
            Login to be cool
          </h2>
        </div>
      </div>
    </section>

    <div class="container">
      <form name="login">
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
          <button class="button is-primary">Login</button>
        </div>
      </form>
      <button class="button is-text" id="reglocation">Don't have an account? Register</button>
    </div>
  `;

  document.forms.login.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => alert("okay"));
  });

  document
    .getElementById("reglocation")
    .addEventListener("click", () => (location.hash = "#register"));
};

export default LoginPage;
