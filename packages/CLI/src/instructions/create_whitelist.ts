export async function create_whitelist(alice,fileStream,client,makeid,AptosClient) {
    for (let i=0;i<fileStream['whitelist'].length;i+=1000){
        const create_whitelist_payloads = {
            type: "entry_function_payload",
            function: `${fileStream["program"]}::candymachine::create_whitelist`,
            type_arguments: [],
            arguments: [fileStream['resource_account'],fileStream['whitelist'].slice(i,i+1000),1,""+makeid(5)],
        };
        let txnRequest = await client.generateTransaction(alice.address(), create_whitelist_payloads);
        let bcsTxn = AptosClient.generateBCSTransaction(alice, txnRequest);
        let transactionRes = await client.submitSignedBCSTransaction(bcsTxn);
        let check_txn = await client.waitForTransactionWithResult(transactionRes.hash);
        if (check_txn['success']){
            console.log('Whitelist Created - Transaction Hash: ' + transactionRes.hash)
        }
    }
}