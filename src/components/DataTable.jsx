// Importation des composants nécessaires
import DataTableHead from "./DataTableHead";
import DataTableBody from "./DataTableBody";

// Composant pour un tableau de données
const DataTable = ({
  id,
  data,
  columns,
  setSortCriteria,
  setSortDirection,
  sortDirection,
  className,
  currentPage,
  dataLength,
  sortCriteria,
}) => {
  // Construction de la ligne des titres - une seule ligne
  const titles = (
    <DataTableHead
      columns={columns}
      data={data}
      setSortDirection={setSortDirection}
      sortDirection={sortDirection}
      setSortCriteria={setSortCriteria}
      sortCriteria={sortCriteria}
      id={id}
    />
  );

  // Construction des lignes de valeurs - autant de lignes que d'éléments dans "data"
  const values = (
    <DataTableBody
      data={data}
      columns={columns}
      currentPage={currentPage}
      dataLength={dataLength}
    />
  );

  // Retour du tableau avec les titres et les valeurs
  return (
    <>
      <table id={id} className={className}>
        <thead>{titles}</thead>
        <tbody>{values}</tbody>
      </table>
    </>
  );
};

// Exportation du composant DataTable
export default DataTable;
