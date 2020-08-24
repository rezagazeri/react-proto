import React from "react";
import GridContainer from "components/Grid/GridContainer.js";

import { EntityCard } from "../../routes";
import { Customcard } from "../../components/CusstomCard/CustomCard.jsx";

const ItRisk = () => (
  <React.Fragment>
    <div className="dashboard__title" p={2}>
      برمبنای موجودیت ها
    </div>
    <GridContainer>
      {EntityCard.map((card, idx) => (
        <Customcard text={card.name} color={card.color} key={idx} />
      ))}
    </GridContainer>
  </React.Fragment>
);

export default ItRisk;
