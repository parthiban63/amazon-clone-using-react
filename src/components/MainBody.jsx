import React from "react";
import Makecard from "./MakeCard";
import Store from "../fakeStore";
import Row from "./Row";
import BigCard from "./BigCard";
function MainBody() {
  return (
    <div className="main flex">
      <Makecard fetchUrl={Store.mensclothing} />
      <Makecard fetchUrl={Store.jewelery} />

      <Row fetchUrl={Store.womensclothing} heading="Women's Clothing"></Row>
      <Row fetchUrl={Store.mensclothing} heading="Men's Clothing"></Row>
      <Row fetchUrl={Store.electronics} heading="Electronics" />
      <Makecard fetchUrl={Store.electronics} />
      <Makecard fetchUrl={Store.mensclothing} />
      <Makecard fetchUrl={Store.womensclothing} />

      <Row fetchUrl={Store.jewelery} heading="Jewelery"></Row>
      <Row fetchUrl={Store.mensclothing} heading="Men Fashion"></Row>

      <Row fetchUrl={Store.electronics} heading="Computing" />
      <Row fetchUrl={Store.womensclothing} heading="Fashion"></Row>
    </div>
  );
}

export default MainBody;
