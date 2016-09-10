import { ReactElement } from "react";
import { Graph } from '../model/falcor';

export interface PageConfig<T> {
  title?(data: Graph, params: T): string;
  render(data: Graph, params: T): ReactElement<any>;
  redirects?: 'NO!';
  urlPattern?: 'NO!';
  data?(params: T): any; // Graph-esque?
}