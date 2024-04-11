// Composant pour le corps du tableau de données
const DataTableBody = ({ data, columns, currentPage, dataLength }) => {
  // Calcul des indices de début et de fin pour la pagination
  const startIndex = currentPage * dataLength - dataLength;
  const endIndex = parseInt(startIndex) + parseInt(dataLength);
  // Extraction des données actuelles en fonction de la pagination
  const currentData = data.slice(startIndex, endIndex);

  // Construction des lignes du tableau
  const rows = currentData.map((item, rowIndex) => (
    // Chaque ligne a une classe en fonction de son indice pour permettre une mise en forme différente des lignes paires et impaires
    <tr key={rowIndex} className={rowIndex % 2 == 0 ? "odd" : "even"}>
      {/* Construction des cellules de la ligne */}
      {columns.map((column, columnIndex) => {
        // Chaque cellule contient la valeur correspondante de l'item pour la colonne
        return <td key={columnIndex}>{item[column.valueName]}</td>;
      })}
    </tr>
  ));

  // Retour des lignes du tableau
  return <>{rows}</>;
};

// Exportation du composant DataTableBody
export default DataTableBody;
