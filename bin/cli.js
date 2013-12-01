#!/usr/bin/env node
var program = require('commander');
var _ = require('underscore');
var songci = require('../lib/songci.js');
var json = require('../json/songci.json');

program
  .version('0.0.1')
  .option('-a, --author [author]', 'poetry by the author')
  .option('-t, --title [title]', 'the title of the poetry')
  .option('-s, --search [search]', 'search the title')
  .option('-c, --content [content]', 'search the content')
  .option('--authors', 'list all the authors')
  .option('--poetries', 'list all the poetries')
  .parse(process.argv);


if (program.author && program.title) {
    songci.printPoetry(songci.getPoetryByTitleAndAuthor(program.title, program.author));
    process.exit(0);
}

if (program.author) {
    songci.printPoetry(songci.getPoetryByAuthor(program.author));
    process.exit(0);
}

if (program.title) {
    songci.printPoetry(songci.getPoetryByTitle(program.title));
    process.exit(0);
}

if (program.authors) {
    console.log(_.keys(json).join('\n'));
    process.exit(0);
}

if(program.poetries) {
    var all = _.flatten(_.values(json));
    songci.printPoetry(all);
    process.exit(0);
}

if (program.search) {
    songci.printPoetry(songci.getPoetryBySearchTitle(program.search));
    process.exit(0);
}

if (program.content) {
    songci.printPoetry(songci.getPoetryBySearchContent(program.content));
    process.exit(0);
}