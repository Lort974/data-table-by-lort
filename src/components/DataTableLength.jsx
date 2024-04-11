// Ce composant est utilisé pour définir le nombre d'entrées à afficher par page dans un tableau de données
const DataTableLength = ({ setDataLength, dataLength, setCurrentPage }) => {
  // Cette fonction est appelée chaque fois que l'utilisateur change la valeur du sélecteur
  const handleSelect = (e) => {
    // Obtient la valeur sélectionnée du sélecteur
    const selectedLength = document.querySelector(
      "select[name='table-length']"
    );
    // Met à jour la longueur des données avec la valeur sélectionnée
    setDataLength(selectedLength.value);
    // Réinitialise la page actuelle à 1 chaque fois que la longueur des données change
    setCurrentPage(1);
  };
  // Retourne le JSX pour le composant
  return (
    <div>
      {/* Sélecteur pour choisir le nombre d'entrées à afficher par page */}
      <select
        onChange={(e) => handleSelect(e)}
        name="table-length"
        id="table-length"
        defaultValue={dataLength}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      {/* Étiquette pour le sélecteur */}
      <label htmlFor="table-length">entries per page</label>
    </div>
  );
};

// Exporte le composant pour qu'il puisse être utilisé ailleurs
export default DataTableLength;
