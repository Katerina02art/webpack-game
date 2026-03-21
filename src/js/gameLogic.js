export default function gameLogic(score) {
  if (score >= 100) {
    return 'victory';
  }
  if (score >= 50) {
    return 'good';
  }
  if (score >= 20) {
    return 'normal';
  }
  return 'defeat';
}
