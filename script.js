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
      // Deduplicate by name at runtime
      const seen = new Set();
      const unique = [];
      people.forEach(p => {
        if (!seen.has(p.name)) {
          seen.add(p.name);
          unique.push(p);
        }
      });
      const list = document.createElement('ul');
      list.className = 'famous-list';
      unique.forEach(person => {
        const li = document.createElement('li');
        li.className = 'famous-item';
        // Person name
        const nameEl = document.createElement('strong');
        nameEl.textContent = person.name;
        li.appendChild(nameEl);
        // Function to insert snippet and link into li
        const insertDetails = (snippet, url) => {
          if (snippet) {
            const snippetEl = document.createElement('p');
            snippetEl.className = 'snippet';
            snippetEl.textContent = snippet;
            li.appendChild(snippetEl);
          }
          if (url) {
            const linkEl = document.createElement('a');
            linkEl.className = 'learn-more';
            linkEl.href = url;
            linkEl.target = '_blank';
            linkEl.rel = 'noopener noreferrer';
            linkEl.textContent = 'Learn more';
            li.appendChild(linkEl);
          }
        };
        // If snippet already provided, use it; otherwise fetch from Wikipedia
        if (person.snippet) {
          insertDetails(person.snippet, person.link);
        } else {
          // Build page title for Wikipedia API (replace spaces with underscores)
          const title = encodeURIComponent(person.name.replace(/ /g, '_'));
          fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`)
            .then(resp => resp.ok ? resp.json() : Promise.reject())
            .then(data => {
              const extract = data.extract;
              const linkUrl = data.content_urls && data.content_urls.desktop && data.content_urls.desktop.page ? data.content_urls.desktop.page : `https://en.wikipedia.org/wiki/${title}`;
              insertDetails(extract, linkUrl);
            })
            .catch(() => {
              // Fallback: just provide Wikipedia link if available
              const linkUrl = `https://en.wikipedia.org/wiki/${title}`;
              insertDetails('', linkUrl);
            });
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