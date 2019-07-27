import jpHoursOfTheDay from  './hours_of_the_day';
import jpMinutes from  './minutes';

import { setQuizLength, shuffle, createQuestion, getEnglishWord, getJapaneseTranslations } from '../quiz_setup';

function setUpHoursOfTheDayQuiz() {
  const minutesInJapanese = shuffle([...jpHoursOfTheDay])
  let questions = [];
  for (let i = 0; i < minutesInJapanese.length; i++) {
    const timesEng = getEnglishWord(minutesInJapanese[i]);
    const timesJp = getJapaneseTranslations(minutesInJapanese[i]);
    questions[i] = createQuestion(i + 1, `${timesEng}`, `${timesJp}`);
  }
  return questions;
}

function setUpMinutesQuiz(quiz) {
  const minutesInJapanese = [...jpMinutes];
  if (quiz === '21-40') {
    minutesInJapanese.splice(0, 20);
  } else if (quiz === '41-60') {
    minutesInJapanese.splice(0, minutesInJapanese.length - 20);
  }
  minutesInJapanese.length = 20;
  const times = shuffle([...minutesInJapanese]);
  let questions = [];
  for (let i = 0; i < times.length; i++) {
    const timesEng = times[i].word === '1' ? `${getEnglishWord(times[i])} minute` : `${getEnglishWord(times[i])} minutes`
    const timesJp = getJapaneseTranslations(times[i]);
    questions[i] = createQuestion(i + 1, `${timesEng}`, `${timesJp}`);
  }
  return questions;
}

export { setUpMinutesQuiz, setUpHoursOfTheDayQuiz };