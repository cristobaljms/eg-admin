import React from "react";
import "./Contact.scss";
import { Pqrs } from "./Pqrs/Pqrs";
import { Faq } from "./Faq/Faq";

export const Contact = () => {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <div className="h-full">
      <div className="w-full h-full">
        <ul className="tab-list flex gap-8">
          <li
            onClick={() => setTabValue(0)}
            className={`tab-item${tabValue === 0 && "-active"} cursor-pointer px-12 py-1 text-xl`}
          >
            PQRs
          </li>
          <li
            onClick={() => setTabValue(1)}
            className={`tab-item${tabValue === 1 && "-active"} px-12 cursor-pointer py-1 text-xl`}
          >
            Preguntas frecuentes
          </li>
        </ul>
        <div className="tab-content h-full">{tabValue === 0 && <Pqrs />}</div>
        <div className="tab-content">{tabValue === 1 && <Faq />}</div>
      </div>
    </div>
  );
};
