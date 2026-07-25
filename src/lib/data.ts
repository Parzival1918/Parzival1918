import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';

export function getYamlData<T>(fileName: string): T {
  const filePath = path.join(process.cwd(), 'data', fileName);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as T;
  } catch (error) {
    console.error(`Error reading YAML file ${fileName}:`, error);
    return [] as unknown as T;
  }
}
