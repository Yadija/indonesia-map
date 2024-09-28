import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import fs from 'fs';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/* This function is used to extract path data from the SVG file */

// function for read file TSX and get data from tag <path>
function extractPathData(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      // regex for finding <path> tags and extracting d, id, and name
      const pathRegex =
        /<path[^>]*d='([^']*)'[^>]*id='([^']*)'[^>]*name='([^']*)'[^>]*>/g;
      const paths = [];
      let match;

      while ((match = pathRegex.exec(data)) !== null) {
        const [, d, id, name] = match;
        paths.push({ id, name, d });
      }

      resolve(paths);
    });
  });
}

// function to read all TSX files in the directory and merge the data
async function processFiles() {
  const dirPath = path.join(__dirname, './src/components');
  const outputPath = path.join(__dirname, 'output.json');

  try {
    const files = fs.readdirSync(dirPath).filter((file) => file.endsWith('.tsx'));
    let allPaths = [];

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const pathData = await extractPathData(filePath);
      allPaths = allPaths.concat(pathData);
    }

    fs.writeFileSync(outputPath, JSON.stringify(allPaths, null, 2));
    console.log('Data has been written to output.json');
  } catch (err) {
    console.error('Error:', err);
  }
}

// run the function to process the files
processFiles();
