const apiKey = process.env.GEMINI_API_KEY || "";
async function run() {
  let url = `https://generativelanguage.googleapis.com/v1beta/models`;
  let hasNext = true;
  let allModels = [];
  while (hasNext) {
    const res = await fetch(url, { headers: { 'x-goog-api-key': apiKey } });
    const data = await res.json();
    if (data.models) {
      allModels.push(...data.models);
    }
    if (data.nextPageToken) {
      url = `https://generativelanguage.googleapis.com/v1beta/models?pageToken=${data.nextPageToken}`;
    } else {
      hasNext = false;
    }
  }
  console.log("Total models paginated:", allModels.length);
  const m = allModels.filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'));
  console.log("generateContent models paginated:", m.length);
  console.log(m.map(x=>x.name).join(', '));
}
run();
