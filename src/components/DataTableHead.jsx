// Ce composant est utilisé pour afficher l'en-tête d'un tableau de données
const DataTableHead = ({
  columns, // Les colonnes du tableau
  setSortDirection, // Fonction pour définir la direction du tri
  sortDirection, // Direction actuelle du tri
  setSortCriteria, // Fonction pour définir le critère de tri
  sortCriteria, // Critère de tri actuel
}) => {
  // Cette fonction est appelée chaque fois que l'utilisateur clique sur une cellule d'en-tête pour trier
  const handleSort = (e, criteria) => {
    // Met à jour le critère de tri avec la valeur actuelle de la cellule d'en-tête
    setSortCriteria(criteria);
    let newSortDirection = "";
    // Change la direction du tri en fonction de la direction actuelle
    switch (sortDirection) {
      case "none":
        newSortDirection = "asc";
        break;
      case "asc":
        newSortDirection = "desc";
        break;
      case "desc":
        newSortDirection = "none";
        break;
      default:
        newSortDirection = "none";
    }
    // Met à jour la direction du tri
    setSortDirection(newSortDirection);
  };

  // Crée un tableau de cellules d'en-tête à partir des colonnes fournies
  const titleCells = columns.map((column, index) => {
    return (
      // Chaque cellule d'en-tête a un gestionnaire de clic qui appelle handleSort avec le nom de la valeur de la colonne
      <th
        key={index}
        onClick={(e) => handleSort(e, column.valueName)}
        data-sort={sortCriteria === column.valueName ? sortDirection : "none"}
      >
        <span>{column.title}</span> {/* Le titre de la colonne */}
        <span>↓</span> {/* Icône pour indiquer le tri ascendant */}
        <span>↑</span> {/* Icône pour indiquer le tri descendant */}
      </th>
    );
  });

  // Retourne une ligne avec toutes les cellules d'en-tête
  return <tr>{titleCells}</tr>;
};

// Exporte le composant pour qu'il puisse être utilisé ailleurs
export default DataTableHead;
