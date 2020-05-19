#!/usr/bin/env node
"use strict";

// options is optional
require("yargs")
  .demandCommand(1)
  .strict()
  .command(
    "all <source>",
    "Transpile all files from provided source",
    yargs => {
      yargs.positional("source", {
        describe: "root source directory",
        default: process.cwd()
      });
    },
    argv => {
      console.log(argv);
      const {template, source, sufix} = argv;
      const parser = require("./sass2css");
      parser.transpilesFiles(source, template, sufix);
    }
  )
  .option("sufix", {
    alias: "f",
    type: "string",
    description: "File endings of parsed content",
  })
  // .option("verbose", {
  //   alias: "v",
  //   type: "boolean",
  //   description: "Run with verbose logging",
  // })
  .option("template", {
    alias: "t",
    type: "string",
    description: "Template for interpolated scss",
  }).argv;

