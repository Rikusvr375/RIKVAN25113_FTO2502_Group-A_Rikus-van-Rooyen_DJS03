import { podcasts } from "./views/data.js";
import { createModal } from "./components/createModal.jsx";
import { createGrid } from "./views/createGrid.jsx";
import  root  from "./views/header.jsx"

/**
 * Initializes the podcast application.
 *
 * @principle SRP - Only responsible for application startup logic like event binding and rendering initial grid.
 */
function init() {
  document
  .getElementById("closeModal")
    .addEventListener("click", createModal.close);
  const grid = createGrid();
  grid.render(podcasts);
}

init();

function renderApp() {
  root.render(
    <>
      <Header />
    </>
  );
}

// Initial render
renderApp();