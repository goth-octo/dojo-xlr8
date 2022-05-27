import fs from 'fs';

export const TAGS_FILE = '../repository_tags.json';
export const COMMITS_FILE = '../repository_commits.json';

export type Tag = Readonly<{
  name: string;
  date: Date;
}>;

export type Commit = Readonly<{
  sha1: string;
  date: Date;
}>;

export function readJSONFile(pathToFile: string): {} {
  const content = fs.readFileSync(pathToFile, 'utf8');
  return JSON.parse(content);
}
