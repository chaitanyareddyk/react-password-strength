import { strengthScore, strengthScoreText, strengthScoreColor, strengthScoreTextWithColor } from '../index';

test('strengthScore Test', () => {
  expect(strengthScore('1234')).toBe(0);
});

test('strengthScoreText Test', () => {
  expect(strengthScoreText('1234')).toBe('too weak');
});

test('strengthScoreColor Test', () => {
  expect(strengthScoreColor('1234')).toBe('#ff0000');
});

test('strengthScoreTextWithColor Test', () => {
  expect(strengthScoreTextWithColor('1234')).toBe('<span style={{color: #ff0000}}>too weak</span>');
});
