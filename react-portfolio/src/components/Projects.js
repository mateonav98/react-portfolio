

const Projects = ({img, title, description, onClick}) => {
  return (
    <div
    onClick={onClick}>
    <div>
      <img alt={title} className="h-full w-full object-cover" src={img}></img>
    </div>
    <h1>
      {title ? title : "Project Name"}
    </h1>
    <h2>
      {description ? description : "Description"}
    </h2>
  </div>
  )
}

export default Projects