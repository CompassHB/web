import * as falcorExpress from "falcor-express";
import {model} from './model';

export const route = falcorExpress.dataSourceRoute((req, res) => {
  return model().asDataSource();
});
