import React from 'react';

import { INFO } from '../static/main.json';
import Section from '../components/Section';

export default function Info() {
  return <Section title={INFO.title} text={INFO.text} />;
}
