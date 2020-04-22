const Menu = {
  body: `
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <h1 class="subtitle">Gym eBuddy</h1>
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-end navbar-menu">
      <a class="navbar-item" onClick="location.hash = '#home'">
        Home
      </a>

      <a class="navbar-item" onClick="location.hash = '#add'">
        Add
      </a>

      <a class="navbar-item" onClick="firebase.auth().signOut()">
        Logout
      </a>
    </div>
  </nav>
  `,
};

export default Menu;
