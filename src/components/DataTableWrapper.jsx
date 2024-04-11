// Importation des hooks nécessaires depuis React et des composants du tableau de données
import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import DataTableInfo from "./DataTableInfo";
import DataTableLength from "./DataTableLength";
import DataTablePaginate from "./DataTablePaginate";
import DataTableFilter from "./DataTableFilter";
import "../style/style.css";

// Ce composant est utilisé pour envelopper tous les composants du tableau de données
const DataTableWrapper = ({
  data, // Les données à afficher dans le tableau
  defaultDataLength, // La longueur par défaut des données à afficher par page
  id, // L'ID du tableau
  columns, // Les colonnes du tableau
  customClassNames, // Les noms de classe personnalisés pour le tableau
}) => {
  // Fonction pour calculer le nombre initial de pages
  const initialPagesNumber = (data) => {
    const itemsNumber = data.length;
    const pagesNumber = Math.ceil(itemsNumber / dataLength);
    return pagesNumber;
  };

  // Initialisation de l'état et des variables
  const initialEntries = data.length;
  const [filteredData, setFilteredData] = useState(data);
  const [sortDirection, setSortDirection] = useState("none");
  const [sortCriteria, setSortCriteria] = useState(null);
  const [dataLength, setDataLength] = useState(
    defaultDataLength ? parseInt(defaultDataLength) : 10
  );
  const [pagesNumber, setPagesNumber] = useState(initialPagesNumber(data));
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Utilisation de l'effet pour mettre à jour le nombre de pages chaque fois que la longueur des données ou les données filtrées changent
  useEffect(() => {
    setPagesNumber(Math.ceil(filteredData.length / dataLength));
  }, [dataLength, filteredData]);

  // Utilisation de l'effet pour filtrer les données et les trier chaque fois que le terme de recherche, les données, les colonnes, le critère de tri ou la direction du tri changent
  useEffect(() => {
    let newFilteredData = data.filter((item) =>
      columns.some((column) =>
        item[column.valueName]
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      )
    );

    if (sortCriteria != null && sortDirection != "none") {
      newFilteredData.sort((a, b) =>
        sortDirection === "asc"
          ? a[sortCriteria].localeCompare(b[sortCriteria])
          : b[sortCriteria].localeCompare(a[sortCriteria])
      );
    }

    setFilteredData(newFilteredData);
  }, [searchTerm, data, columns, sortCriteria, sortDirection]);

  // Utilisation de l'effet pour mettre à jour la direction du tri chaque fois que le critère de tri change
  useEffect(() => {
    if (sortCriteria != null) {
      setSortDirection("asc");
    }
  }, [sortCriteria]);

  // Retourne le JSX pour le composant
  return (
    <div className={`data-table ${customClassNames} lort-data-table-wrapper`}>
      {/* Composant pour filtrer les données du tableau */}
      <DataTableFilter
        setSearchTerm={setSearchTerm}
        data={data}
        columns={columns}
      />
      {/* Composant pour afficher le tableau de données */}
      <DataTable
        setSortDirection={setSortDirection}
        sortDirection={sortDirection}
        setSortCriteria={setSortCriteria}
        sortCriteria={sortCriteria}
        id={id}
        data={filteredData}
        columns={columns}
        currentPage={currentPage}
        dataLength={dataLength}
      />
      {/* Composant pour définir la longueur des données à afficher par page */}
      <DataTableLength
        setDataLength={setDataLength}
        dataLength={dataLength}
        setCurrentPage={setCurrentPage}
      />
      {/* Composant pour afficher des informations sur les données affichées */}
      <DataTableInfo
        currentPage={currentPage}
        dataLength={dataLength}
        data={filteredData}
        initialEntries={initialEntries}
      />
      {/* Composant pour afficher la pagination du tableau */}
      <DataTablePaginate
        pagesNumber={pagesNumber}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

// Exporte le composant pour qu'il puisse être utilisé ailleurs
export default DataTableWrapper;
