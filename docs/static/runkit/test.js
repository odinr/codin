async function* test(items){
    for(const item of items){
        await (new Promise(r => setTimeout(r, 1000)));
        yield item
    }
    return "ok"
}

const tester = test([1,2,3]);
const gg = async() => {
    let item = await tester.next();
    console.log(item);
    while(!item.done){
        item = await tester.next();
        console.log(item);
    }
    return item.value;
}
gg().then(console.log)