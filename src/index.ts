import * as zxcvbn from 'zxcvbn';

const getStrengthColor = (value: string) => {
  const score = zxcvbn(value).score;

  if (Number(score) === -1) return '';

  if (score === 0) return '#ff0000';

  if (score === 1) return '#cccc00';

  if (score === 2) return '#ffa500';

  if (score === 3) return '#00b300';

  if (score === 4) return '#006400';
};

const getStrengthName = (value: string) => {
  const score = zxcvbn(value).score;

  if (Number(score) === -1) return '';

  if (score === 0) return 'too weak';

  if (score === 1) return 'weak';

  if (score === 2) return 'okay';

  if (score === 3) return 'good';

  if (score === 4) return 'strong';
};

export const strengthScore = (value: string) => {
  if (value.length > 0) {
    return zxcvbn(value).score;
  } else return -1;
};

export const strengthScoreText = (value: string) => {
  if (value.length > 0) {
    return getStrengthName(value);
  } else return -1;
};

export const strengthScoreColor = (value: string) => {
  if (value.length > 0) {
    return getStrengthColor(value);
  } else return -1;
};
