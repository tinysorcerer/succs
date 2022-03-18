import React from 'react';

import { HOME } from '../static/main.json';
import Section from '../components/Section';

export default function Home() {
  return <Section title={HOME.title} text={HOME.text} />;
}
