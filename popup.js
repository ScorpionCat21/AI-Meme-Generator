document.getElementById('generateBtn').addEventListener('click', async () => {
  const text = document.getElementById('memeText').value;
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 'Generating...';

  try {
    // ImgFlip API (no key needed for popular templates)
    const response = await fetch('https://api.imgflip.com/caption_image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        template_id: '61579',  // "One Does Not Simply" meme
        username: 'scorpioncat21',  // Register free at imgflip.com
        password: 'vZg9nq-*5m94U47',
        text0: text,
        text1: ''
      })
    });

    const data = await response.json();
    if (data.success) {
      resultDiv.innerHTML = `<img src="${data.data.url}" alt="Generated Meme">`;
    } else {
      resultDiv.innerHTML = `Error: ${data.error_message}`;
    }
  } catch (error) {
    resultDiv.innerHTML = `Failed to connect to API. Try again later.`;
  }
});