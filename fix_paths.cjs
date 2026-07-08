const fs = require('fs');

['index.html', 'page.html'].forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // 1. Remove Localhost References and convert to relative links
    content = content.replace(/http:\/\/localhost:5175\//g, './');
    
    // 2. Convert Absolute Paths to Relative
    content = content.replace(/(href|src|action)=["']\/([^"']+)["']/g, '$1="./$2"');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed paths in ${file}`);
});
