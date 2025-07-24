/*
 * Bar/Bat‑Mitzvah Parsha Finder – FRONT‑END
 *
 * Uses the halachically correct helper
 *     getBarMitzvahParshaName(gYear, gMonth, gDay [, israel=false])
 * that you added to parsha.js.
 *
 * Also:
 *   • Removes duplicate names at runtime
 *   • Pulls Wikipedia summaries if no snippet is stored
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------- DOM elements -------
  const dateInput  = document.getElementById('dateInput');
  const searchBtn  = document.getElementById('searchBtn');
  const resultsDiv = document.getElementById('results');

  // ------- render helper -------
  function renderResults(parshaName, people) {
    resultsDiv.innerHTML = '';

    if (!parshaName) {
      const p = document.createElement('p');
      p.textContent =
        'The Shabbat for that date coincides with a holiday; there is no weekly parsha.';
      resultsDiv.appendChild(p);
      return;
    }

    const heading = document.createElement('p');
    heading.innerHTML =
      `Parsha for your date: <span class="parsha-name">${parshaName}</span>`;
    resultsDiv.appendChild(heading);

    if (!people || people.length === 0) {
      const none = document.createElement('p');
      none.textContent =
        'No famous individuals in our list share this parsha.';
      resultsDiv.appendChild(none);
      return;
    }

    // Deduplicate by name
    const seen   = new Set();
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

      // Name
      const nameEl = document.createElement('strong');
      nameEl.textContent = person.name;
      li.appendChild(nameEl);

      // Helper to insert snippet + link
      const insertDetails = (snippet, url) => {
        if (snippet) {
          const p = document.createElement('p');
          p.className = 'snippet';
          p.textContent = snippet;
          li.appendChild(p);
        }
        if (url) {
          const a = document.createElement('a');
          a.className = 'learn-more';
          a.href   = url;
          a.target = '_blank';
          a.rel    = 'noopener noreferrer';
          a.textContent = 'Learn more';
          li.appendChild(a);
        }
      };

      // If snippet pre‑stored, use it; otherwise fetch from Wikipedia
      if (person.snippet) {
        insertDetails(person.snippet, person.link);
      } else {
        const title = encodeURIComponent(person.name.replace(/ /g, '_'));
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`)
          .then(r => (r.ok ? r.json() : Promise.reject()))
          .then(data => {
            const extract = data.extract || '';
            const url =
              (data.content_urls &&
               data.content_urls.desktop &&
               data.content_urls.desktop.page) ||
              `https://en.wikipedia.org/wiki/${title}`;
            insertDetails(extract, url);
          })
          .catch(() =>
            insertDetails(
              '',
              `https://en.wikipedia.org/wiki/${title}`
            )
          );
      }

      list.appendChild(li);
    });

    resultsDiv.appendChild(list);
  }

  // ------- button click -------
  searchBtn.addEventListener('click', () => {
    const value = dateInput.value;
    if (!value) {
      resultsDiv.textContent = 'Please enter a date.';
      return;
    }

    const [year, month, day] = value.split('-').map(Number);

    // ✅ Halachic calculation (defaults to 13‑year bar‑mitzvah)
    // Pass true as 4th arg for Israeli cycle if desired.
    const parshaName = getBarMitzvahParshaName(year, month, day);

    if (!parshaName) {
      renderResults(null, null);
      return;
    }

    const matching = famousJews.filter(p => p.parsha === parshaName);
    renderResults(parshaName, matching);
  });
});
