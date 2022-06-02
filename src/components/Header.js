// import { useState } from "react"
// import Navigation from "./Navigation"
// import About from "./About"
// import Projects from "./Projects"
// import Contact from "./Contact"
// import Resume from "./Resume"



// const Header = ({title}) => {
//   const [currentPage, setCurrentPage] = useState("About");

//   const renderPage = () => {
//     if (currentPage === "About") {
//       return <About />;
//     }
//     if (currentPage === "Resume") {
//       return <Resume />;
//     }
//     if (currentPage === "Projects") {
//       return <Projects />;
//     }
//     if (currentPage === "Contact") {
//       return <Contact />;
//     }
//   };
//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <header>
//         <h1>{title}</h1>
        
//         <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
//         {renderPage()}
  
//     </header>
//   )
// }

// Header.defaultProps = {
//     title: 'Portfolio'
// }

// export default Header