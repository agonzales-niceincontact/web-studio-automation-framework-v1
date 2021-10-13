let common = [
    'test/features/**/*.feature',
    '--require-module ts-node/register',
    '--require test/steps/**/*.ts',    
    '--format progress-bar',
    '--format summary' 
].join(' ');

module.exports = {
    default: common
  }

// module.exports = {
//     default: `--format-options '{"snippetInterface": "synchronous"}'`
//   }