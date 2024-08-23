const searchSuggestions = async (query) => {
  const res = await fetch(
    `https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=` +
      query
  );
  const str = await res.text();
  const arr = JSON.parse(
    str.substring(str.indexOf("["), str.indexOf("])") + 1)
  );
  let suggestionsTuple = [];

  if (Array.isArray(arr) && Array.isArray(arr.at(1))) {
    suggestionsTuple = arr.at(1);
  }

  const suggestions = suggestionsTuple
    .flatMap((suggestion) => suggestion)
    .filter((suggestion) => typeof suggestion === "string"); // ["faded" ,"faded alan walker lyrics", ...]

  // console.log(suggestions);
  return suggestions;
};

export default searchSuggestions;
