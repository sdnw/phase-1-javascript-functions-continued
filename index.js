// code your solution here
function saturdayFun(act1 = 'roller-skate', act2 = 'bathe my dog') {
    return `This Saturday, I want to ${act1}!`
}

function mondayWork(act1 = 'go to the office', act2 = 'work from home'){
    return `This Monday, I will ${act1}.`
}

function wrapAdjective(flair = '*') {
    return function(adj = 'special') {
        return `You are ${flair}${adj}${flair}!`
    }
}
