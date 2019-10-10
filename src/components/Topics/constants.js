export const LIST_OF_TOPICS = [
  {
    key: 'dates',
    icon: 'fas fa-calendar-alt',
    title: 'Dates 年月日',
    quizzes: [
      { param: 'months', title: 'Months', },
      { param: 'days_of_the_month', title: 'Days of the month' },
      { param: 'days_of_the_week', title: 'Days of the week' }
    ]
  },
  {
    key: 'times',
    icon: 'fas fa-clock',
    title: 'Times 時間',
    quizzes: [
      { param: 'hours_of_the_day', title: 'Hours of the day' },
      { param: 'minutes_upto_20', title: 'Minutes (1-20)' },
      { param: 'minutes_upto_40', title: 'Minutes (21-40)' },
      { param: 'minutes_upto_60', title: 'Minutes (41-60)' },
    ]
  },
  {
    key: 'numbers',
    icon: 'fas fa-calculator',
    title: 'Numbers 番号',
    quizzes: []
  },
  {
    key: 'Hiragana',
    icon: 'fas fa-pen',
    title: 'Hiragana ひらがな',
    quizzes: [
      { param: 'hiragana_1', title: 'あ' },
      { param: 'hiragana_2', title: 'か' },
      { param: 'hiragana_3', title: 'さ' },
      { param: 'hiragana_4', title: 'た' },
      { param: 'hiragana_5', title: 'な' },
      { param: 'hiragana_6', title: 'は' },
      { param: 'hiragana_7', title: 'ま' },
      { param: 'hiragana_8', title: 'や' },
      { param: 'hiragana_9', title: 'ら' },
      { param: 'hiragana_10', title: 'わ' },
      { param: 'hiragana_11', title: 'が' },
      { param: 'hiragana_12', title: 'ざ' },
      { param: 'hiragana_13', title: 'だ' },
      { param: 'hiragana_14', title: 'ば' },
      { param: 'hiragana_15', title: 'ぱ' },
    ]
  },
  {
    key: 'Katakana',
    icon: 'fas fa-pen',
    title: 'Katakana カタカナ',
    quizzes: [
      { param: 'katakana_1', title: 'ア' },
      { param: 'katakana_2', title: 'カ' },
      { param: 'katakana_3', title: 'サ' },
      { param: 'katakana_4', title: 'タ' },
      { param: 'katakana_5', title: 'ナ' },
      { param: 'katakana_6', title: 'ハ' },
      { param: 'katakana_7', title: 'マ' },
      { param: 'katakana_8', title: 'ヤ' },
      { param: 'katakana_9', title: 'ラ' },
      { param: 'katakana_10', title: 'ワ' },
      { param: 'katakana_11', title: 'ガ' },
      { param: 'katakana_12', title: 'ザ' },
      { param: 'katakana_13', title: 'ダ' },
      { param: 'katakana_14', title: 'バ' },
      { param: 'katakana_15', title: 'パ' },
    ]
  },
  {
    key: 'random',
    icon: 'far fa-smile-wink',
    title: 'Randomly generated by topic',
    quizzes: [
      { param: 'dates', title: 'Dates' }
    ]
  }
];
