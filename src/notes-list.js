import {Notes} from 'mdx-deck';
import React from 'react';

export function NotesList({children}) {
  return (
    <ul>
      <Notes>{children}</Notes>
    </ul>
  );
}
