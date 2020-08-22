import React from "react";
import GridContainer from "components/Grid/GridContainer.js";

import { ItOfflineServices } from "../../routes";
import { Itviewcard } from "./../../components/Itviewcards/Itviewcard";

const ItRisk = () => (
  <GridContainer>
    {ItOfflineServices.map((card, idx) => (
      <Itviewcard
        icon={card.icon}
        text={card.name}
        color={card.color}
        key={idx}
      />
    ))}
  </GridContainer>
);

export default ItRisk;
