//num 1a
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(sentence) {
let newSentence = sentence.replace(/([^a-z0-9 \.\_\-]+)/gi, '');
return newSentence
}
console.log(cleanText(sentence))

//num 1b
let _newSentence = 'I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher';

const threeMostFrequentWords = (_newSentence) => {
    let mostFrequent = [];
[...new Set(_newSentence.match(/(\w+)/gi))].forEach(ele => {
    mostFrequent.push({
        'word': ele,
        'count': _newSentence.match(new RegExp(ele+'(?=(\\s|\\.|\\,|\\;|\\?))', 'gi'))?.length
    })
});
mostFrequent.sort((x,y) => y.count - x.count);
return mostFrequent;
}
console.log(threeMostFrequentWords(_newSentence, 3));