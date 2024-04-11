// Importation des hooks nécessaires depuis React
import { useEffect, useState } from "react";

// Ce composant est utilisé pour afficher des informations sur les données affichées dans un tableau
const DataTableInfo = ({ currentPage, dataLength, data, initialEntries }) => {
  // Calcul des indices de début et de fin pour les entrées actuellement affichées
  const startIndex = currentPage * dataLength - dataLength + 1;
  let endIndex = parseInt(startIndex) + parseInt(dataLength) - 1;
  // Si l'indice de fin est supérieur à la longueur des données, il est réglé sur la longueur des données
  endIndex = endIndex > data.length ? data.length : endIndex;

  // Initialisation de l'état pour le texte à afficher
  const [displayText, setDisplayText] = useState(
    `Showing ${startIndex} to ${endIndex} of ${data.length} entries.`
  );

  // Utilisation de l'effet pour mettre à jour le texte d'affichage chaque fois que les données ou la page actuelle changent
  useEffect(() => {
    const startIndex = currentPage * dataLength - dataLength + 1;
    let endIndex = parseInt(startIndex) + parseInt(dataLength) - 1;
    endIndex = endIndex > data.length ? data.length : endIndex;
    // Si la longueur des données est inférieure aux entrées initiales, un complément est ajouté pour indiquer qu'il s'agit d'un filtrage
    const complement =
      data.length < initialEntries
        ? ` (filtered from ${initialEntries} total entries)`
        : "";
    // Mise à jour du texte d'affichage
    setDisplayText(
      `Showing ${startIndex} to ${endIndex} of ${data.length} entries${complement}.`
    );
  }, [data, currentPage, dataLength]);

  // Retourne un paragraphe avec le texte d'affichage
  return <p>{displayText}</p>;
};

// Exporte le composant pour qu'il puisse être utilisé ailleurs
export default DataTableInfo;
