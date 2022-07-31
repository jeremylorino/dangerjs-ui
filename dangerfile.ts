import { danger, message } from "danger";
import {
  committedFilesGrep,
  commonAddedLinesContains,
  commonFileContains,
  commonFileExists,
} from "danger-plugin-toolbox";

const modifiedMD = danger.git.modified_files.join("- ");
message("Changed Files in this PR: \n - " + modifiedMD);

commonAddedLinesContains(
  /\.(js|jsx)$/i,
  /console\.[a-z]+/,
  (f) => `The file "${f}" may contain console commands.`
);
commonAddedLinesContains(
  /\.md$/i,
  /react native+/,
  () => 'Please, use "React Native" instead of "react native".',
  { inline: true }
);
commonAddedLinesContains(
  /\.(js|jsx)$/i,
  /console\.[a-z]+/,
  (f) => `The file "${f}" may contain console commands.`,
  { logType: "fail" }
);

commonFileContains("changelog.md", /unreleased/im);
commonFileContains("file.js", /^\s*var /im, { reverse: true });

commonFileExists("file.js");
commonFileExists(["file1.js", "folder/file2.js"]);
commonFileExists("file.js", { logType: "fail" });

const testFiles = committedFilesGrep(/(\.test\.js|\.spec\.js)$/);
