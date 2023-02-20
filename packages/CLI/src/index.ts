#!/usr/bin/env node
import { AptosClient, AptosAccount, FaucetClient,HexString} from "aptos";
import * as fs from "fs"
import {create_candy} from "./instructions/create_candy"
import {create_whitelist} from "./instructions/create_whitelist"
import {mint_script} from "./instructions/mint"
import {makeid} from "./utils/seedGenerate"
import {program} from "commander"

program
  .version('0.0.1')
  .description("Candy machine smart contract for Aptos Blockchain.")
  .option('-c, --create_candy', 'create_candy')
  .option('-w, --create_whitelist', 'create_whitelist')
  .option('-w, --config', 'config')
  .option('-m, --mint <user_private_key>', 'request to mint')
  .option('-p, --pause_mint', 'pause_mint')
  .parse(process.argv);

let argIndex = process.argv.indexOf('--config')

const fileStream = JSON.parse(fs.readFileSync(process.argv[argIndex+1],"utf8"));
const options = program.opts();
const client = new AptosClient(fileStream['NODE_URL']);


// const fileStream = JSON.parse(fs.readFileSync('config.json',"utf8"));

if (options.create_candy) {
  const alice = new AptosAccount(HexString.ensure(fileStream['creator_private_key']).toUint8Array(),undefined);
  create_candy(alice,fileStream,client,makeid,AptosClient);  
}
if (options.create_whitelist) {
  const alice = new AptosAccount(HexString.ensure(fileStream['creator_private_key']).toUint8Array(),undefined);
  const client = new AptosClient(fileStream['NODE_URL']);
  create_whitelist(alice,fileStream,client,makeid,AptosClient);  
}
if (options.mint) {
  console.log(options.mint);
  const bob = new AptosAccount(HexString.ensure(options.mint).toUint8Array(),undefined);
  mint_script(bob,fileStream,client,AptosClient);  
}
if (!process.argv.slice(1).length) {
  program.outputHelp();
}

