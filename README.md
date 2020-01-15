# Repro for an issue in @types/react-redux

https://github.com/DefinitelyTyped/DefinitelyTyped/pull/41540

## Getting started

```zsh
npm install
npm run tsc
```

Tsc is expected to throw an error, but it doesn't with `@types/react-redux@7.1.5`.

## What is the problem?

```ts
type State = {
  foo: string;
};

// Expect error TS2322: Type 'string' is not assignable to type 'number'.
const foo: number = useSelector((state: State) => state.foo, shallowEqual);
```

The return type of useSelector is expected to be string here, so it should be an error.
But the type definition for the shallowEqual misses type inference because it uses "any" for the parameter.

```ts
export function shallowEqual(left: any, right: any): boolean;
```
