export async function mint_script(bob,fileStream,client,AptosClient) {
    const mint_script_payload = {
      type: "entry_function_payload",
      function: `${fileStream["program"]}::candymachine::mint_script`,
      type_arguments: [],
      arguments: [
        fileStream['resource_account']
      ],
    };

    console.log(mint_script_payload);
    let txnRequest = await client.generateTransaction(bob.address(), mint_script_payload);
    let bcsTxn = AptosClient.generateBCSTransaction(bob, txnRequest);
    let transactionRes = await client.submitSignedBCSTransaction(bcsTxn);
    let check_txn = await client.waitForTransactionWithResult(transactionRes.hash);
    console.log(check_txn);
    return transactionRes.hash
  }
