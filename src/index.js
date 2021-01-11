const core = require("@actions/core");
const github = require("@actions/github");
const io = require("@actions/io");
const { lstatSync, readdirSync, writeFileSync } = require("fs");
const { join, cwd } = require("path");
const buildIndex = require("./buildIndex");

try {
  const index = buildIndex(process.cwd());

  writeFileSync(
    path.join(process.cwd(), "index.json"),
    JSON.stringify(index, null, 2),
    "utf8"
  );
  core.setOutput("index.json", index);
} catch (error) {
  core.setFailed(error.message);
}
