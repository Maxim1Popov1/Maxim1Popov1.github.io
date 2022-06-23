const discounts = [8, 13, 5.5];
const basicPercent = 15;
const borrowers = ['семейная ипотека', 'льготная ипотека', 'обычная', 'ипотека для IT-специалистов'];

let i = 0;

for (; i< borrowers.length; i++) {
        if (i<3) {
   nextPercent = basicPercent - discounts[i];
   console.log(borrowers[i] + nextPercent);
    }
    else (console.log(borrowers[2] + basicPercent));
}
    


