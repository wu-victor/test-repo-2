const core = require("@actions/core");
const fs = require("fs/promises");
const axios = require("axios");

const category = core.getInput('category') || 'inspire';
const readme_path = core.getInput('readme_path') || 'README.md';

(async () => {
  try {
    // Fetch the quote from API
    const { data } = await axios.get(
      `https://quotes.rest/qod?category=${category}`
    );

    let qotd = data.contents.quotes[0].quote;
    console.log({ qotd })
    
  } catch (error) {
    console.log(error.message);
  }
})();