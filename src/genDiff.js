import path from 'path';
import fs from 'fs';
import _, { sortBy } from 'lodash';

const genDiff = (path1, path2) => {
    const file1 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), path1), 'utf-8'));
    const file2 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), path2), 'utf-8'));

    const keys = _.union(Object.keys(file1), Object.keys(file2));
    const sortedKeys = _.sortBy(keys);
    
    const comparison = sortedKeys.flatmap((key) => {
        if (file1.key !== 'undefined' && file2.key === 'undefined') {
            
        }
        if (file1.key === 'undefined' && file2.key !== 'undefined') {

        }
        if (file1.key !== 'undefined' && file2.key !== 'undefined') {
            if (file1.key === file2.key) {

            }
        } else {

        }

    });
    return comparison;
};
export default genDiff;