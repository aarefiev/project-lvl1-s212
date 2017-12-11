#!/usr/bin/env node

import { getUserName } from '../';

console.log('Welcome to the Brain Games!\n');

const user_name = getUserName();

console.log(`Hello, ${user_name}`);
