import React, { Component, Fragment } from 'react';

import classes from  './CreateQuiz.module.scss';
import Section from '../../components/UI/Section/Section';


import Button from '../../components/UI/Button/Button';
import Dropdown from '../../components/UI/Dropdown/Dropdown';


import locations from '../../japanese/sentence_generator/locations/locations';
import personalPronouns from '../../japanese/sentence_generator/pronouns/personal_pronouns';

import * as sentenceGenerator from '../../japanese/sentence_generator/sentence_generator';

class CreateQuiz extends Component {
  state = {
    topic: 'pronoun',
    particles: ['は'],
    otherInfo: 'adjective',
    sentenceEng: '',
    sentenceJp: '',
    sentenceWithTopicAndVerb: false,
  };

  // componentDidMount() {
  //   const verbs = sentenceGenerator.verbs;
  //   this.setState({
  //     verbConjugation: Object.keys(verbObj.conjugations)[0],
  //     verbConjugations: verbObj.conjugations
  //   })
  // }

  updateTopic = (topic) => {
    if (topic === 'pronoun') {
      this.setState({topic});
    } else {
      this.setState({topic, otherInfo: 'adjective'});
    }
  }

  addParticle(particle) {
    if (particle === 'verb')　{
      this.setState({sentenceWithTopicAndVerb: true, topic: 'pronoun', otherInfo: 'location'});
    }
  }

  generateSentence = () => {
    if (this.state.sentenceWithTopicAndVerb) {
      const conjugations = ['present', 'past', 'negative', 'past_negative'];
      const conjugation = sentenceGenerator.shuffle(conjugations)[0];
      let pronoun = null;
      let location = null;
      if (this.state.otherInfo === 'location') {
        location = sentenceGenerator.shuffle([...locations])[0];
      }
      if (this.state.topic === 'pronoun') {
        sentenceGenerator.shuffle(personalPronouns);
        pronoun = personalPronouns[0];
      }
      const sentence = sentenceGenerator.generateSentenceWithVerb('に', pronoun, this.state.topic, this.state.otherInfo, location, conjugation);
      this.setState({sentenceEng: sentence.english, sentenceJp: sentence.japanese})
    } else {
      const sentence = sentenceGenerator.generateSentenceWithTopic(this.state.topic, this.state.otherInfo);
      this.setState({sentenceEng: sentence.english, sentenceJp: sentence.japanese})
    }
  }
  render() {
    let nameOption = null;
    if (this.state.topic === 'pronoun' && this.state.particles.includes('は')) {
     nameOption = <option value='name'>[Name]</option>;
    }
    let addVerb = (
      <div className={classes.WordContainer}>
        <select
          className={classes.GrammarDropdown}
          onChange={evt => this.addParticle(evt.target.value)}>
          <option>More Grammar</option>
          <option value='verb'>Verb</option>
        </select>
      </div>
    );
    let sentenceWithTopic = (
      <Fragment>
      <Dropdown
        label='Topic'
        options={[
          { name: "[Pronoun]", value: "pronoun" },
          { name: "[Location]", value: "location" }
        ]}
        onChange={evt => this.setState({ topic: evt.target.value, otherInfo: 'adjective' })}
      />
        <div className={classes.WordContainer}>
          <p className={classes.GrammarType}>Particle</p>
          <select
              className={classes.GrammarDropdown}
            >
              <option>は</option>
          </select>
        </div>
        <div className={classes.WordContainer}>
          <p className={classes.GrammarType}>Other info</p>
          <select
            className={classes.GrammarDropdown}
            onChange={evt => this.setState({ otherInfo: evt.target.value })}
          >
            <option value={"adjective"}>[Adjective]</option>
            {/* If pronoun and ha particle, display option */}
            {nameOption}
          </select>
        </div>
        {/* If there is no verb */}
        <div className={classes.WordContainer}>
          <p className={classes.GrammarType}>Tense</p>
          {/* <button className={classes.AddBtn}>Add Adjective or relative time</button> */}
          <select className={classes.GrammarDropdown}>
            {/* If pronoun and ha particle, display option */}
            <option value={'desu'}>です</option>
          </select>
          {/* <button className={classes.AddBtn}>Add Particle</button> */}
        </div>
      </Fragment>
    );
    let sentenceWithTopicAndVerb = null;
    if (this.state.sentenceWithTopicAndVerb) {
      sentenceWithTopic = null;
      addVerb = null;
      sentenceWithTopicAndVerb = (
        <Fragment>
          <div className={classes.WordContainer}>
            <p className={classes.GrammarType}>Particle</p>
            <select
              className={classes.GrammarDropdown}
              onChange={evt => this.updateTopic(evt.target.value)}>
              <option value="pronoun">[Pronoun]</option>
            </select>
          </div>
          <div className={classes.WordContainer}>
            <p className={classes.GrammarType}>Particle</p>
            <select
                className={classes.GrammarDropdown}
              >
                <option>は</option>
            </select>
          </div>
          <div className={classes.WordContainer}>
            <p className={classes.GrammarType}>Other info</p>
            <select
              className={classes.GrammarDropdown}
              onChange={evt => this.setState({ otherInfo: evt.target.value })}>
              <option value={"location"}>[Location]</option>
              {/* If pronoun and ha particle, display option */}
              {nameOption}
            </select>
          </div>
          <div className={classes.WordContainer}>
            <p className={classes.GrammarType}>Particle</p>
            <select
                className={classes.GrammarDropdown}
              >
                <option>に</option>
            </select>
          </div>
          <div className={classes.WordContainer}>
          <p className={classes.GrammarType}>Action</p>
            <select
              className={classes.GrammarDropdown}
              onChange={evt => this.setState({ otherInfo: evt.target.value })}>
              <option value={"verb"}>[Verb]</option>
            </select>
          </div>
        </Fragment>
      );
    }
    return (
      <Section name='Create Quiz' className={classes.CreateQuiz}>
        <div className={classes.SentenceContainer}>
          { sentenceWithTopic }
          { addVerb }
          { sentenceWithTopicAndVerb }
        </div>
        <Button onClick={() => this.generateSentence()}>Generate sentence</Button>
        <p className={classes.Sentence}>Example:</p>
        { !this.state.sentenceWithTopicAndVerb &&
            <p className={classes.ExampleSentence}>[{this.state.topic}]は[{this.state.otherInfo}]</p>
        }
        { this.state.sentenceWithTopicAndVerb &&
          <p className={classes.ExampleSentence}>[{this.state.topic}]は[{this.state.otherInfo}]に[Verb]</p>
        }
        <p className={classes.Sentence}>{this.state.sentenceJp}</p>
        <p className={classes.Sentence}>{this.state.sentenceEng}</p>
      </Section>
    )
  }
}

export default CreateQuiz;