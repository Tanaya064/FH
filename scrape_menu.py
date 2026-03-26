import urllib.request
import re
import json

url = "https://www.zomato.com/nagpur/fuel-headquaters-bajaj-nagar/order"
req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) width/1920 Chrome/114.0.0.0 Safari/537'}
)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        # Find the JSON block. Zomato uses <script>window.__PRELOADED_STATE__ = JSON.parse("...");</script>
        # or something similar. Let's dump the entire html to a file to inspect locally since Zomato changes this.
        with open('zomato_order.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print("Written to zomato_order.html")
except Exception as e:
    print("Error:", e)
