const catalogName = "Мій навчальний каталог";

function getLabel(minutes) {
    if (minutes <= 15) {
        return "Короткий навчальний ресурс";
    } else {
        return "Тривалий навчальний ресурс";
    }
}

console.log(catalogName);
console.log(getLabel(15));
console.log(getLabel(16));