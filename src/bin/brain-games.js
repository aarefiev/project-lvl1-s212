#!/usr/bin/env node

import getUserName from '..';

console.log('Welcome to the Brain Games!\n');

const userName = getUserName();

console.log(`Hello, ${userName}`);
