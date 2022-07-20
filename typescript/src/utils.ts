import fs from 'fs';

export const TAGS_FILE = '../repository_tags.json';
export const COMMITS_FILE = '../repository_commits.json';

export const WORKED_DAYS_IN_A_MONTH = 20;
export const WORKED_DAYS_IN_A_SPRINT = 10;

export type Tag = Readonly<{
  name: string;
  date: Date;
}>;

export type Commit = Readonly<{
  sha1: string;
  date: Date;
}>;

export function readJSONFile<T>(pathToFile: string): T {
  const content = fs.readFileSync(pathToFile, 'utf8');
  return JSON.parse(content);
}
