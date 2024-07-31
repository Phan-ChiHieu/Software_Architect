import React, { Fragment, ReactNode } from "react";

type ListProps<Item> = {
  data: Item[];
  getKey: (key: Item) => React.Key;
  getRow: (key: Item) => ReactNode;
};

function List<Itemtype>({ data, getKey, getRow }: ListProps<Itemtype>) {
  return data.map((item) => <Fragment key={getKey(item)}>{getRow(item)}</Fragment>);
}

const _dataDemo = [
  { id: 1, name: "Kyle", age: 29 },
  { id: 2, name: "Sally", age: 30 },
  { id: 3, name: "Luct", isProgramer: true },
];

export default function WithComponent() {
  return (
    <div>
      <h1>WithComponent</h1>
      <List<{ id: number; name: string; age?: number; isProgramer?: boolean }>
        data={_dataDemo}
        getKey={(person) => person.id}
        getRow={(person) => <div>{person.name}</div>}
      />
    </div>
  );
}
