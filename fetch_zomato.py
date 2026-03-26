import urllib.request
import re

url = "https://www.zomato.com/nagpur/fuel-headquaters-bajaj-nagar/photos"
req = urllib.request.Request(
    url, 
    data=None, 
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        
        matches = set(re.findall(r'https://b\.zmtcdn\.com/data/pictures/[a-zA-Z0-9_/\-\.]+\.jpg', html))
        # filter out the tiny thumbnails if possible. typically they have fit=around
        with open("zomato_urls.txt", "w", encoding="utf-8") as f:
            for idx, m in enumerate(list(matches)[:50]):
                f.write(f"{m}\n")
except Exception as e:
    with open("zomato_urls.txt", "w", encoding="utf-8") as f:
        f.write("Error: " + str(e))
