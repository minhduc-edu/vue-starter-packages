import * as fs from 'fs';
import { packageRoot } from '../utils/path';

export interface IPackage {
  version: string;
  description: string;
}

export const Package: IPackage = JSON.parse(fs.readFileSync(packageRoot('package.json')).toString());
