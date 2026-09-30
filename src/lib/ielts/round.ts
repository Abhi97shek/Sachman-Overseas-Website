/** Official IELTS overall-band rounding (ielts.org scoring in detail). */
export function roundIeltsOverall(average: number) {
  const whole = Math.floor(average + 1e-9);
  const fraction = average - whole;
  if (fraction < 0.25) return whole;
  if (fraction < 0.75) return whole + 0.5;
  return whole + 1;
}

export function overallFromSections(listening: number, reading: number, writing: number, speaking: number) {
  const average = (listening + reading + writing + speaking) / 4;
  return { average, overall: roundIeltsOverall(average) };
}

export function formatBand(score: number) {
  return score.toFixed(1);
}

export const BAND_OPTIONS = Array.from({ length: 19 }, (_, index) => index * 0.5);
