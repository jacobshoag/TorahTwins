/*
 * Front‑end logic for the Bar/Bat Mitzvah Parsha Finder site.  This
 * script reads a user‑entered date, computes the corresponding parsha
 * using functions defined in parsha.js, and displays a list of
 * famous Jews who celebrated their bar or bat mitzvah with that
 * parsha.  The data is loaded from data.js.
 */

// Wait for the DOM to be ready before attaching event handlers
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('dateInput');
  const searchBtn = document.getElementById('searchBtn');
  const resultsDiv = document.getElementById('results');

  function renderResults(parshaName, people) {
    resultsDiv.innerHTML = '';
    if (!parshaName) {
      const p = document.createElement('p');
      p.textContent = 'The Shabbat for that date coincides with a holiday; there is no weekly parsha.';
      resultsDiv.appendChild(p);
      return;
    }
    const heading = document.createElement('p');
    heading.innerHTML = `Parsha for your date: <span class="parsha-name">${parshaName}</span>`;
    resultsDiv.appendChild(heading);
    if (!people || people.length === 0) {
      const none = document.createElement('p');
      none.textContent = 'No famous individuals in our list share this parsha.';
      resultsDiv.appendChild(none);
    } else {
      const list = document.createElement('ul');
      list.className = 'famous-list';
      people.forEach(person => {
        const li = document.createElement('li');
        li.className = 'famous-item';
        // Person name
        const nameEl = document.createElement('strong');
        nameEl.textContent = person.name;
        li.appendChild(nameEl);
        // Snippet if available
        if (person.snippet) {
          const snippet = document.createElement('p');
          snippet.className = 'snippet';
          snippet.textContent = person.snippet;
          li.appendChild(snippet);
        }
        // Link if available
        if (person.link) {
          const linkEl = document.createElement('a');
          linkEl.className = 'learn-more';
          linkEl.href = person.link;
          linkEl.target = '_blank';
          linkEl.rel = 'noopener noreferrer';
          linkEl.textContent = 'Learn more';
          li.appendChild(linkEl);
        }
        list.appendChild(li);
      });
      resultsDiv.appendChild(list);
    }
  }

  searchBtn.addEventListener('click', () => {
    const value = dateInput.value;
    if (!value) {
      resultsDiv.textContent = 'Please enter a date.';
      return;
    }
    const [year, month, day] = value.split('-').map(num => parseInt(num, 10));
    // JavaScript months in this algorithm are 1–12, so we pass month as parsed
    const parshaName = getParshaName(year, month, day);
    if (parshaName === null) {
      renderResults(null, null);
      return;
    }
    const matching = famousJews.filter(item => item.parsha === parshaName);
    renderResults(parshaName, matching);
  });
});