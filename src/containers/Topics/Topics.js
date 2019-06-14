import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import AnimateHeight from 'react-animate-height';

import classes from "./Topics.module.scss";

class Topics extends Component {
  state = {
    topics: [
      {
        topic: "Dates 年月日",
        icon: "fas fa-calendar-alt",
        param: "dates",
        choices: [
          { name: "Dates", param: "dates" },
          { name: "Months", param: "months" },
          { name: "Days of the month", param: "days_of_the_month" },
          { name: "Days of the week", param: "days_of_the_week" }
        ]
      },
      {
        topic: "Times 時間",
        icon: "fas fa-clock",
        param: 'times',
        choices: [
          { name: "Minutes", param: "minutes" },
        ]
      },
      { topic: "Numbers 番号", icon: "fas fa-calculator", param: 'numbers', choices: [] }
    ],
    openTopics: [],
    quizLength: 10,
  };

  topicClickeHandler = (index, topicId) => {
    const chevronClassList = document.querySelector(`#chevron-${index}`).classList;
    chevronClassList.toggle(classes.RotateChevron);
    const openTopics = [...this.state.openTopics];
    if (openTopics.indexOf(topicId) > -1) {
      openTopics.splice(openTopics.indexOf(topicId), 1);
    } else {
      openTopics.push(topicId)
    }
    this.setState({ openTopics });
  };

  render() {
    const topics = this.state.topics.map((topicObj, index) => {
      const topicId = `topic-${index}`;
      const topicChoices = topicObj.choices.map(choice => (
        <Link
          key={choice.param}
          className={`${classes.TopicChoice} disable-select`}
          to={{ pathname: `quiz`, search: `?topic=${choice.param}&quiz_length=${this.state.quizLength}` }}>{choice.name}</Link>
      ));
      return (
        <Fragment key={topicId}>
          <li id={topicId} className={classes.Topic} onClick={() => this.topicClickeHandler(index, topicId)}>
            <p>
              <i className={topicObj.icon} />{topicObj.topic}
            </p>
            <i id={`chevron-${index}`} className={`${classes.ChevronDown} fas fa-chevron-down`}/>
          </li>
          <AnimateHeight
            duration={ 300 }
            height={this.state.openTopics.indexOf(topicId) > -1 ? 'auto' : 0}// see props documentation bellow
          >
            <div id={`topic-choices-${index}`} className={`${classes.TopicChoices}`}>
              <label className={classes.QuizLengthLabel}>
                Number of Questions:
                <select className={classes.QuizLength} onChange={(evt) => this.setState({quizLength: evt.target.value})} >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="35">35</option>
                  <option value="50">50</option>
                </select>
              </label>
              {topicChoices}
            </div>
        </AnimateHeight>
        </Fragment>
      );
    });
    return (
      <div className={classes.Topics}>
        <h2 className={classes.Header}><i className="fas fa-pencil-alt" />Quizzes</h2>
        <ul className={classes.TopicList}>{topics}</ul>
      </div>
    );
  }
}

export default Topics;
