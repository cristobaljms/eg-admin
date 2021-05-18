import React from "react";
import "./Main.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { Statistics } from "../../pages/Statistics/Statistics";
import { Transactions } from "../../pages/Transactions/Transactions";
import { Offers } from "../../pages/Offers/Offers";
import { News } from "../../pages/News/News";
import { Contact } from "../../pages/Contact/Contact";
import { Users } from "../../pages/Users/Users";

export const Main = () => {
  return (
    <div className="main w-full h-full p-12">
      <Switch>
        <Route path="/statistics" component={Statistics} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/offers" component={Offers} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route path="/users" component={Users} />
        <Redirect from="/" to="/users" />
      </Switch>
    </div>
  );
};
