import * as fs from 'fs';
import { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

async function readJsonFile() {
  try {
    const jsonData = await readFileAsync('path/to/json/file.json', 'utf8');
    const jsonObject = JSON.parse(jsonData);
    console.log(jsonObject);
  } catch (error) {
    console.error(error);
  }
}