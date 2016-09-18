import { ReactElement } from "react";
import { Graph } from '../model/falcor';

export interface PageConfig {
  title?(data: Graph): string;
  render(data: Graph): ReactElement<any>;
  redirects?: 'NO!';
  urlPattern?: 'NO!';
  data?(): Graph; // Must return something if implemented (TODO: Use `Graph`)
}