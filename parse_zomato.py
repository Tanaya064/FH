import urllib.request
import re

url = "https://www.zomato.com/nagpur/fuel-headquaters-bajaj-nagar/photos"
req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        
        matches = re.findall(r'<img[^>]*alt="([^"]*)"[^>]*src="([^"]*zmtcdn\.com/data/pictures/[^"]*)"', html)
        for alt, src in matches:
            if alt.strip():
                print(f"ALT: {alt} SRC: {src}")
except Exception as e:
    print("Error:", e)
