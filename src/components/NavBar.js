import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const projectArray = links.map((link) => {
    return <a keys={links} href={'#'+ link}>link</a>
  })

  return <nav>
    {projectArray}
  </nav>
}

export default NavBar;
