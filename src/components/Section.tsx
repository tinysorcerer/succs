import React from 'react';

type PROPS = {
  title: string;
  text: string[];
};

export default function Section({ title, text }: PROPS) {
  return (
    <section>
      <h2>{title}</h2>
      {text.map((p) => (
        <p>{p}</p>
      ))}
    </section>
  );
}
