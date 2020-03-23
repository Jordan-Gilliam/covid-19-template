const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['grommet-controls']); // pass the modules you would like to see transpiled

module.exports = withPlugins([withTM], {
    env: {
        CITY: '',
        SLACK_URL: '',
        GITHUB_URL: '',
        INSTAGRAM_URL: '',
        STATIC_FORMS_ACCESS_KEY: '@static-forms-access-key', // get your access key from https://www.staticforms.xyz
        STATIC_FORMS_EMAIL: '@static-forms-email', // this will set replyTo of email to email address entered in the form
    }
});
