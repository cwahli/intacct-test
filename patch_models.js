const fs = require('fs');
let code = fs.readFileSync('src/Assets/index.js', 'utf8');

const replacement = `    try {
      let url = \`https://generativelanguage.googleapis.com/v1beta/models\`;
      let hasNext = true;
      let allModels = [];

      while (hasNext) {
        const res = await fetch(url, {
          headers: {
            'x-goog-api-key': key
          }
        });
        if (!res.ok) {
          const errJson = await res.json().catch(() => ({}));
          throw new Error(errJson.error ? errJson.error.message : 'HTTP status ' + res.status);
        }
        const data = await res.json();
        if (data.models) {
          allModels.push(...data.models);
        }
        if (data.nextPageToken) {
          url = \`https://generativelanguage.googleapis.com/v1beta/models?pageToken=\${data.nextPageToken}\`;
        } else {
          hasNext = false;
        }
      }

      if (allModels.length > 0 && modelSelect) {
        modelSelect.innerHTML = '';
        const filtered = allModels.filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'));
        if (filtered.length === 0) {
          modelSelect.innerHTML = '<option value="models/gemini-1.5-flash">models/gemini-1.5-flash</option>';
          if (statusEl) statusEl.textContent = 'No generateContent models found. Using default.';
          addSystemMessage('No generateContent models found. Using default.');
        } else {
          filtered.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m.name;
            opt.textContent = \`\${m.name} (\${m.displayName || ''})\`;
            modelSelect.appendChild(opt);
          });
          const currSaved = localStorage.getItem('gemini_model') || 'models/gemini-1.5-flash';
          // Only set value if it exists in the fetched options
          if (filtered.find(m => m.name === currSaved)) {
            modelSelect.value = currSaved;
          } else if (filtered.length > 0) {
            modelSelect.value = filtered[0].name;
          }
          
          const selectContainer = document.getElementById('modelSelectContainer');
          if (selectContainer) selectContainer.style.display = 'block';
          if (statusEl) statusEl.textContent = \`\${filtered.length} models fetched successfully.\`;
          addSystemMessage(\`\${filtered.length} models fetched successfully.\`);
        }
      }
    } catch (err) {`;

code = code.replace(/    try \{[\s\S]*?    \} catch \(err\) \{/, replacement);

fs.writeFileSync('src/Assets/index.js', code);
