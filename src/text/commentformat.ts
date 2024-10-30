import { CodeEditor } from '@jupyterlab/codeeditor';

import { IComment } from '../api';

export interface ITextSelectionComment extends IComment {
  type: 'text-selection';
  target: {
    start: CodeEditor.IPosition;
    end: CodeEditor.IPosition;
  };
}
