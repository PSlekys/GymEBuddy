import Menu from "../components/Menu.js";

const AddPage = (app) => {
  app.innerHTML = Menu.body;
  app.innerHTML += `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Add Progress
          </h1>
          <h2 class="subtitle">
            Enter your progress details
          </h2>
        </div>
      </div>
    </section>

    <div class="container">
      <form name="addexc">
        <select name="pratimas">
        </select>

        <input type="number" name="kg" placeholder="kg">

        <button type="submit" class="button is-primary">Add</button>
      </form>
    </div>
  `;

  const selectExc = document.querySelector("select[name=pratimas]");

  firebase
    .firestore()
    .collection("pratimai")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((pratimas) => {
        const option = document.createElement("option");
        option.textContent = pratimas.data().name;
        option.value = pratimas.id;
        selectExc.append(option);
      });
    });

  document.forms.addexc.addEventListener("submit", (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("userProgress")
      .add({
        pratimas: e.target.elements.pratimas.value,
        kg: e.target.elements.kg.value,
        user: firebase.auth().currentUser.uid,
      })
      .then(() => alert("Geras sportas"));
  });
};

export default AddPage;
