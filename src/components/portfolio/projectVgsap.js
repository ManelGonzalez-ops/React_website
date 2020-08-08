import React, { Fragment } from "react";
import proyectos from "./projectImports"

import ComponerContainer from "./videos/ComponerContainer"

//     const Pomodoro = React.lazy(() => import("./videos/Pomodoro"))


const Project = () => {


  return (

    <Fragment>
      {proyectos.map((componente, index) => (

        
          <div className="project" key={index}>
            <ComponerContainer video={componente.video} route={componente.route} />
            {/* <Link to="/expenses" className="linkProject">
              <p className="titulo-project">{componente.name}</p>
            </Link> */}
          </div>
       
      ))
      }</Fragment>

  );
};

export default Project;





