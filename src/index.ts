import {
  commentRegistryPlugin,
  commentWidgetRegistryPlugin,
  jupyterCommentingPlugin
} from './api';
// Importing directly from './text' causes the imported plugin to be undefined (??)
import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import { notebookCommentsPlugin } from './notebook';
import { textCommentingPlugin } from './text/plugin';

export * from './api';
export * from './notebook';
export * from './text';

const plugins: JupyterFrontEndPlugin<any>[] = [
  jupyterCommentingPlugin,
  commentRegistryPlugin,
  commentWidgetRegistryPlugin,
  notebookCommentsPlugin,
  textCommentingPlugin
];

/**
 * Export the plugins as default.
 */
export default plugins;
