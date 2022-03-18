import React from 'react';

import { ABOUT } from '../static/main.json';
import Section from '../components/Section';

export default function About() {
  return <Section title={ABOUT.title} text={ABOUT.text} />;
}
