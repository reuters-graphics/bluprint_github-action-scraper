import TeamsKlaxon from '@reuters-graphics/teams-klaxon';
import chalk from 'chalk';

const logTeamsMessage = async(message, error = false) => {
  const klaxon = new TeamsKlaxon(process.env.TEAMS_WEBHOOK);
  await klaxon.log(message);
  if (error) throw new Error(message.text || message.title);
};

const logLocalMessage = (message, error = false) => {
  if (error) {
    console.log(chalk`{red {{ projectName }}}: ${message.text || message.title}`);
    throw new Error(message.text || message.title);
  } else {
    console.log(chalk`{green {{ projectName }}}: ${message.text || message.title}`);
  }
};

export default {
  log: async(message) => {
    if (process.env.TEAMS_WEBHOOK) {
      await logTeamsMessage(message);
    } else {
      logLocalMessage(message);
    }
  },
  error: async(message) => {
    if (process.env.TEAMS_WEBHOOK) {
      await logTeamsMessage(message, true);
    } else {
      logLocalMessage(message, true);
    }
  },
};
