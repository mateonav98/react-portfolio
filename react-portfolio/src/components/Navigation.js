const Navigation = ( {currentPage, handlePageChange} ) => {
  return (
    <nav>
    <ul>
      <li className={currentPage === "About"}>
        <a href="#About" onClick={() => handlePageChange("About")}>About</a>
      </li>
      <li className={currentPage === "Projects"}>
        <a href="#Projects" onClick={() => handlePageChange("Projects")}>Projects</a>
      </li>
      <li className={currentPage === "Contact"}>
        <a href="#Contact" onClick={() => handlePageChange("Contact")}>Contact</a>
      </li>
    </ul>
  </nav>
);
}

export default Navigation