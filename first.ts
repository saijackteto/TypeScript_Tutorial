const smallAnimal = 
{
    name: "小動物"
};

const attributes = 
{
    job: "小説家",
    nearStation: "小岩駅"
};

const copy = {...smallAnimal};

const marged = {...smallAnimal, ...attributes};

