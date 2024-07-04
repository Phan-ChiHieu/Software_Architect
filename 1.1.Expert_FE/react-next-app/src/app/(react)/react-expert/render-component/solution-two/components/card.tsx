import React from "react";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  description: string;
}

export default function Card(props: CardProps) {
  const { className, title, description, ...restProps } = props;

  console.log(props);

  return (
    <div className={className} {...restProps}>
      <h1>{title}</h1>
    </div>
  );
}
