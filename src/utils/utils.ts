export const shuffleArray = (arry: any[]) =>
  [...arry].sort(() => Math.random() - 0.5);
