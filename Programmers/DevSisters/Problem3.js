function solution(pouches) {
  const jellyTypes = ['a', 'b', 'c', 'd', 'e'];
  let maxPouchCount = 0;

  for (let mainJelly of jellyTypes) {
    let jellyDiffList = [];

    for (let pouch of pouches) {
      let score = 0;
      for (let jelly of pouch) {
        score += jelly === mainJelly ? 1 : -1;
      }
      jellyDiffList.push(score);
    }

    jellyDiffList.sort((a, b) => b - a);

    let totalScore = 0;
    let selectedCount = 0;

    for (let diff of jellyDiffList) {
      totalScore += diff;
      if (totalScore > 0) {
        selectedCount += 1;
      } else {
        break;
      }
    }

    if (selectedCount > maxPouchCount) {
      maxPouchCount = selectedCount;
    }
  }
  return maxPouchCount;
}
