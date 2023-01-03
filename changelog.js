var packageJson = require('./package.json');
var fs = require('fs');

const date = new Date();

const file = './CHANGELOG.md';

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const [latestPr] = data
    .split('/pull/')
    .map((el) => parseInt(el.split(')\n')[0]))
    .filter((el) => el)
    .sort()
    .reverse();

  const replacement = `## [Unreleased]
## [[${packageJson.version}](https://github.com/ElrondNetwork/dapp-core/pull/${
    latestPr + 1
  })] - ${date.toISOString().split('T')[0]}
  `;

  console.log('replacement is: \n\n' + replacement);
  console.log(process.env.GITHUB_TOKEN ? true : false);

  var result = data.replace('## [Unreleased]', replacement);

  fs.writeFileSync(file, result, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });
  pushChanges();
});

const pushChanges = async () => {
  console.log('head ref is: ', process.env.GITHUB_HEAD_REF);
  // await runInWorkspace('git', [
  //   'config',
  //   'user.name',
  //   `"${process.env.GITHUB_USER || 'Automated Changelog'}"`
  // ]);
  // await runInWorkspace('git', [
  //   'config',
  //   'user.email',
  //   `"${
  //     process.env.GITHUB_EMAIL ||
  //     'gh-action-changelog-edit@users.noreply.github.com'
  //   }"`
  // ]);
};
