//num 1
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


const tenMostFrequentWords = (paragraph) => {
    let mostFrequent = [];
[...new Set(paragraph.match(/(\w+)/gi))].forEach(ele => {
    mostFrequent.push({
        'word': ele,
        'count': paragraph.match(new RegExp(ele+'(?=(\\s|\\.|\\,|\\;|\\?))', 'gi'))?.length
    })
});
mostFrequent.sort((x,y) => y.count - x.count);
return mostFrequent;
}
console.log(tenMostFrequentWords(paragraph, 10)); //I still need more understanding of Regex