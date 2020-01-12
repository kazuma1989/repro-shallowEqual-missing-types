import React from "react";
import { useSelector, shallowEqual } from "react-redux";

type State = {
  foo: string;
};

export default function App() {
  // Expect error TS2322: Type 'string' is not assignable to type 'number'.
  const foo: number = useSelector((state: State) => state.foo, shallowEqual);

  return <div>{foo}</div>;
}
