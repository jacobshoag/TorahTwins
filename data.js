const famousJews = [
  {
    "name": "Albert Einstein",
    "parsha": "Ki Tisa",
    "birthdate": "1879-03-14",
    "bar_date": "1892-03-14"
  },
  {
    "name": "Golda Meir",
    "parsha": "Achrei Mot, Kedoshim",
    "birthdate": "1898-05-03",
    "bar_date": "1911-05-03"
  },
  {
    "name": "Ruth Bader Ginsburg",
    "parsha": "Vayikra",
    "birthdate": "1933-03-15",
    "bar_date": "1946-03-15"
  },
  {
    "name": "Mark Zuckerberg",
    "parsha": "Emor",
    "birthdate": "1984-05-14",
    "bar_date": "1997-05-14"
  },
  {
    "name": "Sigmund Freud",
    "parsha": "Behar, Bechukotai",
    "birthdate": "1856-05-06",
    "bar_date": "1869-05-06"
  },
  {
    "name": "Gal Gadot",
    "parsha": "Tazria, Metzora",
    "birthdate": "1985-04-30",
    "bar_date": "1998-04-30"
  },
  {
    "name": "Natalie Portman",
    "parsha": "Korach",
    "birthdate": "1981-06-09",
    "bar_date": "1994-06-09"
  },
  {
    "name": "Steven Spielberg",
    "parsha": "Vayishlach",
    "birthdate": "1946-12-18",
    "bar_date": "1959-12-18"
  },
  {
    "name": "Jonas Salk",
    "parsha": "Noach",
    "birthdate": "1914-10-28",
    "bar_date": "1927-10-28"
  },
  {
    "name": "Leonard Cohen",
    "parsha": "Ha’azinu",
    "birthdate": "1934-09-21",
    "bar_date": "1947-09-21"
  },
  {
    "name": "Anne Frank",
    "parsha": "Sh’lach",
    "birthdate": "1929-06-12",
    "bar_date": "1942-06-12"
  },
  {
    "name": "Noam Chomsky",
    "parsha": "Vayeshev",
    "birthdate": "1928-12-07",
    "bar_date": "1941-12-07"
  },
  {
    "name": "Barbra Streisand",
    "parsha": "Achrei Mot, Kedoshim",
    "birthdate": "1942-04-24",
    "bar_date": "1955-04-24"
  },
  {
    "name": "David Ben-Gurion",
    "parsha": "Vayera",
    "birthdate": "1886-10-16",
    "bar_date": "1899-10-16"
  },
  {
    "name": "Shimon Peres",
    "parsha": "Eikev",
    "birthdate": "1923-08-02",
    "bar_date": "1936-08-02"
  },
  {
    "name": "Emma Lazarus",
    "parsha": "Masei",
    "birthdate": "1849-07-22",
    "bar_date": "1862-07-22"
  },
  {
    "name": "Sergey Brin",
    "parsha": "Eikev",
    "birthdate": "1973-08-21",
    "bar_date": "1986-08-21"
  },
  {
    "name": "Larry Page",
    "parsha": "Tzav",
    "birthdate": "1973-03-26",
    "bar_date": "1986-03-26"
  },
  {
    "name": "Sarah Silverman",
    "parsha": "Miketz",
    "birthdate": "1970-12-01",
    "bar_date": "1983-12-01"
  },
  {
    "name": "Isaac Bashevis Singer",
    "parsha": "Toldot",
    "birthdate": "1903-11-21",
    "bar_date": "1916-11-21"
  },
  {
    "name": "George Gershwin",
    "parsha": "Ha’azinu",
    "birthdate": "1898-09-26",
    "bar_date": "1911-09-26"
  },
  {
    "name": "Henry Kissinger",
    "parsha": "Naso",
    "birthdate": "1923-05-27",
    "bar_date": "1936-05-27"
  },
  {
    "name": "Elie Wiesel",
    "parsha": "Ha’azinu",
    "birthdate": "1928-09-30",
    "bar_date": "1941-09-30"
  },
  {
    "name": "Itzhak Perlman",
    "parsha": "Ki Tavo",
    "birthdate": "1945-08-31",
    "bar_date": "1958-08-31"
  },
  {
    "name": "Abba Eban",
    "parsha": "Beshalach",
    "birthdate": "1915-02-02",
    "bar_date": "1928-02-02"
  },
  {
    "name": "Gilda Radner",
    "parsha": "Sh’lach",
    "birthdate": "1946-06-28",
    "bar_date": "1959-06-28"
  },
  {
    "name": "Deborah Lipstadt",
    "parsha": "Ki Tisa",
    "birthdate": "1947-03-18",
    "bar_date": "1960-03-18"
  },
  {
    "name": "Amarâ€™e Stoudemire",
    "parsha": "Chayei Sara",
    "birthdate": "1982-11-16",
    "bar_date": "1995-11-16"
  },
  {
    "name": "Jon Stewart",
    "parsha": "Vayeshev",
    "birthdate": "1962-11-28",
    "bar_date": "1975-11-28"
  },
  {
    "name": "Bob Dylan",
    "parsha": "Bamidbar",
    "birthdate": "1941-05-24",
    "bar_date": "1954-05-24"
  },
  {
    "name": "Benny Gantz",
    "parsha": "Sh’lach",
    "birthdate": "1959-06-09",
    "bar_date": "1972-06-09"
  },
  {
    "name": "Eli Wiesel",
    "parsha": "Ha’azinu",
    "birthdate": "1928-09-30",
    "bar_date": "1941-09-30"
  },
  {
    "name": "Marcel Marceau",
    "parsha": "Vayikra",
    "birthdate": "1923-03-22",
    "bar_date": "1936-03-22"
  },
  {
    "name": "Jack Black",
    "parsha": "Ki Teitzei",
    "birthdate": "1969-08-28",
    "bar_date": "1982-08-28"
  },
  {
    "name": "Adam Sandler",
    "parsha": "Nitzavim, Vayeilech",
    "birthdate": "1966-09-09",
    "bar_date": "1979-09-09"
  },
  {
    "name": "Milton Friedman",
    "parsha": "Vaetchanan",
    "birthdate": "1912-07-31",
    "bar_date": "1925-07-31"
  },
  {
    "name": "Paul Samuelson",
    "parsha": "Bamidbar",
    "birthdate": "1915-05-15",
    "bar_date": "1928-05-15"
  },
  {
    "name": "Ari Emanuel",
    "parsha": "Vayikra",
    "birthdate": "1961-03-29",
    "bar_date": "1974-03-29"
  },
  {
    "name": "Howard Stern",
    "parsha": "Bo",
    "birthdate": "1954-01-12",
    "bar_date": "1967-01-12"
  },
  {
    "name": "Judith Butler",
    "parsha": "Tetzaveh",
    "birthdate": "1956-02-24",
    "bar_date": "1969-02-24"
  },
  {
    "name": "Gloria Steinem",
    "parsha": "Tzav",
    "birthdate": "1934-03-25",
    "bar_date": "1947-03-25"
  },
  {
    "name": "Sandy Koufax",
    "parsha": "Miketz",
    "birthdate": "1935-12-30",
    "bar_date": "1948-12-30"
  },
  {
    "name": "Hedy Lamarr",
    "parsha": "Vayera",
    "birthdate": "1914-11-09",
    "bar_date": "1927-11-09"
  },
  {
    "name": "George Soros",
    "parsha": "Vaetchanan",
    "birthdate": "1930-08-12",
    "bar_date": "1943-08-12"
  },
  {
    "name": "Jonah Hill",
    "parsha": "Vayigash",
    "birthdate": "1983-12-20",
    "bar_date": "1996-12-20"
  },
  {
    "name": "Scarlett Johansson",
    "parsha": "Chayei Sara",
    "birthdate": "1984-11-22",
    "bar_date": "1997-11-22"
  },
  {
    "name": "Lenny Kravitz",
    "parsha": "Naso",
    "birthdate": "1964-05-26",
    "bar_date": "1977-05-26"
  },
  {
    "name": "Daniel Radcliffe",
    "parsha": "Eikev",
    "birthdate": "1989-07-23",
    "bar_date": "2002-07-23"
  },
  {
    "name": "Woody Allen",
    "parsha": "Toldot",
    "birthdate": "1935-12-01",
    "bar_date": "1948-12-01"
  },
  {
    "name": "Shia LaBeouf",
    "parsha": "Sh’lach",
    "birthdate": "1986-06-11",
    "bar_date": "1999-06-11"
  },
  {
    "name": "Judd Apatow",
    "parsha": "Miketz",
    "birthdate": "1967-12-06",
    "bar_date": "1980-12-06"
  },
  {
    "name": "Gene Wilder",
    "parsha": "Beha'alotcha",
    "birthdate": "1933-06-11",
    "bar_date": "1946-06-11"
  },
  {
    "name": "Billy Crystal",
    "parsha": "Vayikra",
    "birthdate": "1948-03-14",
    "bar_date": "1961-03-14"
  },
  {
    "name": "Max Born",
    "parsha": "Miketz",
    "birthdate": "1882-12-11",
    "bar_date": "1895-12-11"
  },
  {
    "name": "Richard Feynman",
    "parsha": "Bamidbar",
    "birthdate": "1918-05-11",
    "bar_date": "1931-05-11"
  },
  {
    "name": "Julius Rosenberg",
    "parsha": "Bamidbar",
    "birthdate": "1918-05-12",
    "bar_date": "1931-05-12"
  },
  {
    "name": "Judah P. Benjamin",
    "parsha": "Vaetchanan",
    "birthdate": "1811-08-06",
    "bar_date": "1824-08-06"
  },
  {
    "name": "Moshe Safdie",
    "parsha": "Chukat",
    "birthdate": "1938-07-14",
    "bar_date": "1951-07-14"
  },
  {
    "name": "Natalie Maines",
    "parsha": "Bereshit",
    "birthdate": "1974-10-14",
    "bar_date": "1987-10-14"
  },
  {
    "name": "Lisa Kudrow",
    "parsha": "Devarim",
    "birthdate": "1963-07-30",
    "bar_date": "1976-07-30"
  },
  {
    "name": "Jeff Goldblum",
    "parsha": "Bereshit",
    "birthdate": "1952-10-22",
    "bar_date": "1965-10-22"
  },
  {
    "name": "Bette Midler",
    "parsha": "Vayeshev",
    "birthdate": "1945-12-01",
    "bar_date": "1958-12-01"
  },
  {
    "name": "Ben Shapiro",
    "parsha": "Bo",
    "birthdate": "1984-01-15",
    "bar_date": "1997-01-15"
  },
  {
    "name": "Naomi Klein",
    "parsha": "Bamidbar",
    "birthdate": "1970-05-08",
    "bar_date": "1983-05-08"
  },
  {
    "name": "Daniel Kahneman",
    "parsha": "Ki Tisa",
    "birthdate": "1934-03-05",
    "bar_date": "1947-03-05"
  },
  {
    "name": "Amos Tversky",
    "parsha": "Vayakhel, Pekudei",
    "birthdate": "1937-03-16",
    "bar_date": "1950-03-16"
  },
  {
    "name": "Saul Bellow",
    "parsha": "Sh’lach",
    "birthdate": "1915-06-10",
    "bar_date": "1928-06-10"
  },
  {
    "name": "Philip Roth",
    "parsha": "Tzav",
    "birthdate": "1933-03-19",
    "bar_date": "1946-03-19"
  },
  {
    "name": "Nicole Krauss",
    "parsha": "Re’eh",
    "birthdate": "1974-08-18",
    "bar_date": "1987-08-18"
  },
  {
    "name": "Franz Kafka",
    "parsha": "Pinchas",
    "birthdate": "1883-07-03",
    "bar_date": "1896-07-03"
  },
  {
    "name": "Gustav Mahler",
    "parsha": "Balak",
    "birthdate": "1860-07-07",
    "bar_date": "1873-07-07"
  },
  {
    "name": "Erich Fromm",
    "parsha": "Shmini",
    "birthdate": "1900-03-23",
    "bar_date": "1913-03-23"
  },
  {
    "name": "Theodor Herzl",
    "parsha": "Tazria, Metzora",
    "birthdate": "1860-05-02",
    "bar_date": "1873-05-02"
  },
  {
    "name": "Boris Pasternak",
    "parsha": "Yitro",
    "birthdate": "1890-02-10",
    "bar_date": "1903-02-10"
  },
  {
    "name": "Marc Chagall",
    "parsha": "Chukat",
    "birthdate": "1887-07-07",
    "bar_date": "1900-07-07"
  },
  {
    "name": "Walter Benjamin",
    "parsha": "Chukat, Balak",
    "birthdate": "1892-07-15",
    "bar_date": "1905-07-15"
  },
  {
    "name": "Karl Marx",
    "parsha": "Behar, Bechukotai",
    "birthdate": "1818-05-05",
    "bar_date": "1831-05-05"
  },
  {
    "name": "Leon Trotsky",
    "parsha": "Chayei Sara",
    "birthdate": "1879-11-07",
    "bar_date": "1892-11-07"
  },
  {
    "name": "Emma Goldman",
    "parsha": "Balak",
    "birthdate": "1869-06-27",
    "bar_date": "1882-06-27"
  },
  {
    "name": "Bella Abzug",
    "parsha": "Devarim",
    "birthdate": "1920-07-24",
    "bar_date": "1933-07-24"
  },
  {
    "name": "Alan Dershowitz",
    "parsha": "Re’eh",
    "birthdate": "1938-09-01",
    "bar_date": "1951-09-01"
  },
  {
    "name": "Michael Bloomberg",
    "parsha": "Mishpatim",
    "birthdate": "1942-02-14",
    "bar_date": "1955-02-14"
  },
  {
    "name": "Rahm Emanuel",
    "parsha": "Vayeshev",
    "birthdate": "1959-11-29",
    "bar_date": "1972-11-29"
  },
  {
    "name": "Bernie Sanders",
    "parsha": "Ki Teitzei",
    "birthdate": "1941-09-08",
    "bar_date": "1954-09-08"
  },
  {
    "name": "Chuck Schumer",
    "parsha": "Vayetzei",
    "birthdate": "1950-11-23",
    "bar_date": "1963-11-23"
  },
  {
    "name": "Debbie Wasserman Schultz",
    "parsha": "Ha’azinu",
    "birthdate": "1966-09-27",
    "bar_date": "1979-09-27"
  },
  {
    "name": "Eric Cantor",
    "parsha": "Naso",
    "birthdate": "1963-06-06",
    "bar_date": "1976-06-06"
  },
  {
    "name": "Joseph Lieberman",
    "parsha": "Terumah",
    "birthdate": "1942-02-24",
    "bar_date": "1955-02-24"
  },
  {
    "name": "David Axelrod",
    "parsha": "Mishpatim",
    "birthdate": "1955-02-22",
    "bar_date": "1968-02-22"
  },
  {
    "name": "Jared Kushner",
    "parsha": "Bo",
    "birthdate": "1981-01-10",
    "bar_date": "1994-01-10"
  },
  {
    "name": "Ivanka Trump",
    "parsha": "Toldot",
    "birthdate": "1981-10-30",
    "bar_date": "1994-10-30"
  },
  {
    "name": "Douglas Emhoff",
    "parsha": "Noach",
    "birthdate": "1964-10-13",
    "bar_date": "1977-10-13"
  },
  {
    "name": "Merrick Garland",
    "parsha": "Vayera",
    "birthdate": "1952-11-13",
    "bar_date": "1965-11-13"
  },
  {
    "name": "Elena Kagan",
    "parsha": "Achrei Mot",
    "birthdate": "1960-04-28",
    "bar_date": "1973-04-28"
  },
  {
    "name": "Isaac Asimov",
    "parsha": "Vayigash",
    "birthdate": "1920-01-02",
    "bar_date": "1933-01-02"
  },
  {
    "name": "Jon Favreau (director)",
    "parsha": "Bereshit",
    "birthdate": "1966-10-19",
    "bar_date": "1979-10-19"
  },
  {
    "name": "David Schwimmer",
    "parsha": "Lech-Lecha",
    "birthdate": "1966-11-02",
    "bar_date": "1979-11-02"
  },
  {
    "name": "Mila Kunis",
    "parsha": "Shoftim",
    "birthdate": "1983-08-14",
    "bar_date": "1996-08-14"
  },
  {
    "name": "Jake Gyllenhaal",
    "parsha": "Vayechi",
    "birthdate": "1980-12-19",
    "bar_date": "1993-12-19"
  },
  {
    "name": "Maggie Gyllenhaal",
    "parsha": "Toldot",
    "birthdate": "1977-11-16",
    "bar_date": "1990-11-16"
  },
  {
    "name": "Adrien Brody",
    "parsha": "Metzora",
    "birthdate": "1973-04-14",
    "bar_date": "1986-04-14"
  },
  {
    "name": "Tony Kushner",
    "parsha": "Devarim",
    "birthdate": "1956-07-16",
    "bar_date": "1969-07-16"
  },
  {
    "name": "Stephen Sondheim",
    "parsha": "Tzav",
    "birthdate": "1930-03-22",
    "bar_date": "1943-03-22"
  },
  {
    "name": "Art Spiegelman",
    "parsha": "Terumah",
    "birthdate": "1948-02-15",
    "bar_date": "1961-02-15"
  },
  {
    "name": "Alan Arkin",
    "parsha": "Tzav",
    "birthdate": "1934-03-26",
    "bar_date": "1947-03-26"
  },
  {
    "name": "Elliott Gould",
    "parsha": "Re’eh",
    "birthdate": "1938-08-29",
    "bar_date": "1951-08-29"
  },
  {
    "name": "Harold Ramis",
    "parsha": "Toldot",
    "birthdate": "1944-11-21",
    "bar_date": "1957-11-21"
  },
  {
    "name": "Neil Diamond",
    "parsha": "Mishpatim",
    "birthdate": "1941-01-24",
    "bar_date": "1954-01-24"
  },
  {
    "name": "Debbie Friedman",
    "parsha": "Ki Tisa",
    "birthdate": "1951-02-23",
    "bar_date": "1964-02-23"
  },
  {
    "name": "Leonard Bernstein",
    "parsha": "Ki Tavo",
    "birthdate": "1918-08-25",
    "bar_date": "1931-08-25"
  },
  {
    "name": "Arthur Miller",
    "parsha": "Noach",
    "birthdate": "1915-10-17",
    "bar_date": "1928-10-17"
  },
  {
    "name": "Mel Brooks",
    "parsha": "Balak",
    "birthdate": "1926-06-28",
    "bar_date": "1939-06-28"
  },
  {
    "name": "Carl Reiner",
    "parsha": "Tzav",
    "birthdate": "1922-03-20",
    "bar_date": "1935-03-20"
  },
  {
    "name": "Rob Reiner",
    "parsha": "Tetzaveh",
    "birthdate": "1947-03-06",
    "bar_date": "1960-03-06"
  },
  {
    "name": "Norman Lear",
    "parsha": "Matot, Masei",
    "birthdate": "1922-07-27",
    "bar_date": "1935-07-27"
  },
  {
    "name": "Gene Simmons",
    "parsha": "Re’eh",
    "birthdate": "1949-08-25",
    "bar_date": "1962-08-25"
  },
  {
    "name": "Howard Zinn",
    "parsha": "Re’eh",
    "birthdate": "1922-08-24",
    "bar_date": "1935-08-24"
  },
  {
    "name": "Israel Zangwill",
    "parsha": "Beshalach",
    "birthdate": "1864-01-21",
    "bar_date": "1877-01-21"
  },
  {
    "name": "Gertrude Berg",
    "parsha": "Bereshit",
    "birthdate": "1899-10-03",
    "bar_date": "1912-10-03"
  },
  {
    "name": "Al Jolson",
    "parsha": "Beha'alotcha",
    "birthdate": "1886-05-26",
    "bar_date": "1899-05-26"
  },
  {
    "name": "Peter Lorre",
    "parsha": "Chukat",
    "birthdate": "1904-06-26",
    "bar_date": "1917-06-26"
  },
  {
    "name": "Michael Landon",
    "parsha": "Lech-Lecha",
    "birthdate": "1936-10-31",
    "bar_date": "1949-10-31"
  },
  {
    "name": "Ed Asner",
    "parsha": "Vayetzei",
    "birthdate": "1929-11-15",
    "bar_date": "1942-11-15"
  }
  ,
  /*
   * Additional entries added to ensure representation of every weekly Torah portion
   * in the Diaspora reading cycle.  Each new record includes a short
   * biography snippet and a link to the individual’s Wikipedia page for
   * further reading.
   */
  {
    "name": "Alfred Stieglitz",
    "parsha": "Shemot",
    "birthdate": "1864-01-01",
    "bar_date": "1877-01-01",
    "snippet": "American photographer and modern art promoter who helped make photography an accepted art form and introduced avant‑garde European artists to the United States through his New York galleries.",
    "link": "https://en.wikipedia.org/wiki/Alfred_Stieglitz"
  },
  {
    "name": "Jesse Steinfeld",
    "parsha": "Va'eira",
    "birthdate": "1927-01-06",
    "bar_date": "1940-01-06",
    "snippet": "American physician and public health official who served as the 11th Surgeon General of the United States.",
    "link": "https://en.wikipedia.org/wiki/Jesse_Steinfeld"
  },
  {
    "name": "Yitzhak Rabin",
    "parsha": "Vayakhel",
    "birthdate": "1922-03-01",
    "bar_date": "1935-03-01",
    "snippet": "Israeli statesman and general who served as prime minister of Israel (1974–1977 and 1992–1995), the first prime minister born in Mandatory Palestine and a Nobel Peace Prize laureate for the Oslo Accords.",
    "link": "https://en.wikipedia.org/wiki/Yitzhak_Rabin"
  },
  {
    "name": "Jerry Lewis",
    "parsha": "Vayakhel, Pekudei",
    "birthdate": "1926-03-16",
    "bar_date": "1939-03-16",
    "snippet": "American comedian, actor, singer, filmmaker and humanitarian, nicknamed ‘The King of Comedy’ and regarded as one of the greatest comedians of the 20th century.",
    "link": "https://en.wikipedia.org/wiki/Jerry_Lewis"
  },
  {
    "name": "Sigmund Freud",
    "parsha": "Behar, Bechukotai",
    "birthdate": "1856-05-06",
    "bar_date": "1869-05-06",
    "snippet": "Austrian neurologist and the founder of psychoanalysis, a clinical method for evaluating and treating pathologies in the psyche.",
    "link": "https://en.wikipedia.org/wiki/Sigmund_Freud"
  },
  {
    "name": "Gal Gadot",
    "parsha": "Tazria, Metzora",
    "birthdate": "1985-04-30",
    "bar_date": "1998-04-30",
    "snippet": "Israeli actress known for portraying Wonder Woman in the DC Extended Universe; named one of Time’s 100 most influential people and the first Israeli actor to receive a Hollywood Walk of Fame star.",
    "link": "https://en.wikipedia.org/wiki/Gal_Gadot"
  },
  {
    "name": "Adam Sandler",
    "parsha": "Nitzavim, Vayeilech",
    "birthdate": "1966-09-09",
    "bar_date": "1979-09-09",
    "snippet": "American stand‑up comedian and actor, primarily a comedic leading actor in films. His accolades include an Independent Spirit Award and nominations for three Grammy Awards, seven Primetime Emmy Awards, two Golden Globe Awards and a Screen Actors Guild Award.",
    "link": "https://en.wikipedia.org/wiki/Adam_Sandler"
  }
];