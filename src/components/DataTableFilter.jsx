// Ce composant est utilisé pour filtrer les données dans un tableau
const DataTableFilter = ({ setSearchTerm, data }) => {
  // Cette fonction est appelée chaque fois que l'utilisateur tape dans le champ de recherche
  const handleFilter = (e) => {
    // Met à jour le terme de recherche avec la valeur actuelle du champ de recherche
    setSearchTerm(e.target.value);
  };

  // Cette fonction est utilisée pour mettre le focus sur le champ de recherche lorsque l'utilisateur clique sur l'icône de recherche
  const focusSearch = (e) => {
    // Obtient le div parent de l'icône de recherche
    const parentDiv = e.currentTarget.parentNode;
    // Obtient le champ de recherche qui est le premier enfant du div parent
    const searchBar = parentDiv.childNodes[0];
    // Met le focus sur le champ de recherche
    searchBar.focus();
  };

  // Retourne le JSX pour le composant
  return (
    <div>
      {/* Champ de recherche qui appelle handleFilter à chaque changement */}
      <input
        onChange={(e) => handleFilter(e)}
        type="text"
        name="table-search"
        placeholder="Search into the table..."
      />
      {/* Icône de recherche qui appelle focusSearch lorsqu'elle est cliquée */}
      <span onClick={(e) => focusSearch(e)}>
        <svg
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                {/* Chemin pour l'icône de recherche */}
                <path d="M278.718,0C150.086,0,45.435,104.65,45.435,233.282c0,55.642,19.592,106.789,52.228,146.928L0,477.872L34.128,512 l97.663-97.663c40.137,32.635,91.284,52.228,146.926,52.228C407.35,466.565,512,361.914,512,233.282S407.35,0,278.718,0z M278.718,418.299c-102.018,0-185.017-82.999-185.017-185.017S176.699,48.265,278.718,48.265s185.017,82.999,185.017,185.017 S380.736,418.299,278.718,418.299z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </span>
    </div>
  );
};

// Exporte le composant pour qu'il puisse être utilisé ailleurs
export default DataTableFilter;
