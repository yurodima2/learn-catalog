type Resource = {
id: number;
title: string;
minutes: number;
};

const resources: Resource[] = [
{
id: 1,
title: "Основи JavaScript",
minutes: 10
},
{
id: 2,
title: "Основи TypeScript",
minutes: 20
},
{
id: 3,
title: "Робота з Git",
minutes: 30
}
];

function selectResources(
resources: Resource[],
limit: number
): Resource[] {
return resources.filter(resource => resource.minutes <= limit);
}

const selected20 = selectResources(resources, 20);
const selected0 = selectResources(resources, 0);

console.log("Ресурси до 20 хвилин:");
console.log(selected20);
console.log("Кількість:", selected20.length);

console.log("Ресурси до 0 хвилин:");
console.log(selected0);
console.log("Кількість:", selected0.length);
