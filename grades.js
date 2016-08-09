var scores = [82, 71, 95, 98, 69, 72, 78, 84, 64, 58, 87];


var F = 0;
var D = 0;
var C = 0;
var B = 0;
var A = 0;



for (var i = 0; i < scores.length; i++) {
  if (scores[i] >= 91) {
    A ++;
  } else if (scores[i] >= 81 && scores[i] <= 90) {
    B ++;
  } else if (scores[i] >= 71 && scores[i] <= 80) {
    C ++;
  } else if (scores[i] >= 61 && scores[i] <= 70) {
    D ++;
  } else if (scores[i] <= 60) {
    F ++;
  }
}

console.log("A : " + A + " B : " + B 
	+ " C : " + C + " D : " + D + " F : " + F);

