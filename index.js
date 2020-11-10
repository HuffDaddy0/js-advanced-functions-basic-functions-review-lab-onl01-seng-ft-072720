// Your code here
function saturdayFun(thing='roller-skate'){
    return `This Saturday, I want to ${thing}!`
};

let mondayWork = function(work='go to the office'){
return `This Monday, I will ${work}.`
};

function wrapAdjective(whatever='*'){
    return function(thing='special'){
        return `You are ${whatever}${thing}${whatever}!`
    }
}

const Calculator = {
    add: function(){return 1 + 3},
    subtract: function(){return 1 - 3},
    multiply: function(){return 1 * 3},
    divide: function(){return 10/5}    
}