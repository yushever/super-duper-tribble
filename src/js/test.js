let list = [
    {
        name: "Кот",
        age: 18,
    },
    {
        name: "Вомбат",
        age: 34,
    }
]
let fuu = [];

let fu = function (list1) {
    for (let i = 0; i < list1.length; i++) {
        // console.log(list1[i]);
        if (list1[i].age >= 21) {
            console.log(list1[i].name);
            fuu.push(list1[i].name);
            console.log(fuu);
        }
    };
};
fu (list);

// console.log("Hello");