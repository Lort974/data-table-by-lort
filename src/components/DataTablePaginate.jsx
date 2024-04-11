// Ce composant est utilisé pour afficher la pagination d'un tableau de données
const DataTablePaginate = ({ pagesNumber, setCurrentPage, currentPage }) => {
  let pagesButtons = [];
  // Si le nombre de pages est supérieur à 1 et que la page actuelle n'est pas la première, un bouton pour aller à la première page est ajouté
  if (pagesNumber > 1 && currentPage > 1) {
    pagesButtons.push(
      <button
        key="first"
        onClick={(e) => setCurrentPage(1)} // Définit la page actuelle sur 1 lorsqu'il est cliqué
        className="other"
        type="button"
      >
        {"<<"} {/*Symbole pour aller à la première page*/}
      </button>
    );
  }
  // Si la page actuelle n'est pas la première, un bouton pour aller à la page précédente est ajouté
  if (currentPage > 1) {
    pagesButtons.push(
      <button
        key="previous"
        onClick={(e) => setCurrentPage(currentPage - 1)} // Décrémente la page actuelle de 1 lorsqu'il est cliqué
        className="other"
        type="button"
      >
        {"<"} {/*Symbole pour aller à la page précédente*/}
      </button>
    );
  }
  // Ajoute un bouton pour chaque page
  for (let i = 1; i <= pagesNumber; i++) {
    pagesButtons.push(
      <button
        key={i}
        onClick={(e) => setCurrentPage(i)} // Définit la page actuelle sur i lorsqu'il est cliqué
        className={i === currentPage ? "current" : "other"} // Si i est la page actuelle, la classe est "current", sinon elle est "other"
        type="button"
      >
        {i} {/*Le numéro de la page*/}
      </button>
    );
  }
  // Si la page actuelle n'est pas la dernière, un bouton pour aller à la page suivante est ajouté
  if (currentPage < pagesNumber) {
    pagesButtons.push(
      <button
        key="next"
        onClick={(e) => setCurrentPage(currentPage + 1)} // Incrémente la page actuelle de 1 lorsqu'il est cliqué
        className="other"
        type="button"
      >
        {">"} {/*Symbole pour aller à la page suivante*/}
      </button>
    );
  }
  // Si le nombre de pages est supérieur à 1 et que la page actuelle n'est pas la dernière, un bouton pour aller à la dernière page est ajouté
  if (pagesNumber > 1 && currentPage < pagesNumber) {
    pagesButtons.push(
      <button
        key="last"
        onClick={(e) => setCurrentPage(pagesNumber)} // Définit la page actuelle sur le nombre total de pages lorsqu'il est cliqué
        className="other"
        type="button"
      >
        {">>"} {/*Symbole pour aller à la dernière page*/}
      </button>
    );
  }
  // Retourne un div avec tous les boutons de pagination
  return <div>{pagesButtons}</div>;
};

// Exporte le composant pour qu'il puisse être utilisé ailleurs
export default DataTablePaginate;
