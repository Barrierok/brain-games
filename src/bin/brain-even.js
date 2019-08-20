#!/usr/bin/env node
import { greeting, getUserName, brainEven } from '..';

greeting('brainEven');
const userName = getUserName();
brainEven(userName);
