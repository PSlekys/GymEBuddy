import Menu from "../components/Menu.js";

const HomePage = (app) => {
  app.innerHTML = Menu.body;
  app.innerHTML += `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Home
          </h1>
          <h2 class="subtitle">
            See the difference?
          </h2>
        </div>
      </div>
    </section>

    <div class="container">
      <table>
      </table>
    </div>
  `;

  firebase
    .firestore()
    .collection("userProgress")
    .where("user", "==", firebase.auth().currentUser.uid)
    .get()
    .then((snapshot) => {
      document.querySelector("table") = "";
      snapshot.docs.forEach((res) => {
        const tr = document.querySelector("table").insertRow();
        const td1 = tr.insertCell();
        td1.textContent = res.data().kg + "kg";
      });
    });
};

export default HomePage;
