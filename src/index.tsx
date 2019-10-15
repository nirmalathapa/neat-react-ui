/**
 * @class ExampleComponent
 */

import * as React from "react";
import { Button } from "./components/button";
import "./styles/index.scss";
export type Props = { text: string };

export default class ExampleComponent extends React.Component<Props> {
  render() {
    return (
      <>
        <Button textLabel="text test" onClick={() => console.log("test")} NColor='danger'></Button>
        <Button
          iconLeft
          textLabel="text test"
          onClick={() => console.log("test")}
        color='#FFC0CB'
        >
        <img src='../../'></img>
        </Button>
        <Button textLabel="text test" onClick={() => console.log("test")} NColor='dark'></Button>
        <Button textLabel="text test" onClick={() => console.log("test")} disabled NColor='dark'></Button>
      </>
    );
  }
}
