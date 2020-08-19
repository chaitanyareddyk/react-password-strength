import { strengthScore, strengthScoreText, strengthScoreColor } from '../index';

test('strengthScore Test', () => {
  expect(strengthScore('1234')).toBe(0);
});

test('strengthScoreText Test', () => {
  expect(strengthScoreText('1234')).toBe('too weak');
});

test('strengthScoreColor Test', () => {
  expect(strengthScoreColor('1234')).toBe('#ff0000');
});
