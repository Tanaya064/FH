import re

with open('zomato_order.html', 'r', encoding='utf-8') as f:
    html = f.read()

targets = [
    "Hot Sizzling Brownie",
    "Kit Kat Shake",
    "Cold Coffee Frappe",
    "Mango Fuel",
    "Strawberry Fuel",
    "Virgin Mojito"
]

results = []
for t in targets:
    idx = html.find(f'"{t}"')
    if idx == -1:
        idx = html.find(f'>{t}<')
    if idx == -1:
        # try case insensitive
        idx = html.lower().find(f'"{t.lower()}"')
        
    if idx != -1:
        # Search ahead for the next dish_photos URL
        match = re.search(r'dish_photos/([a-z0-9/]+\.(?:jpeg|jpg|png))', html[idx:idx+2500])
        if match:
            url = f"https://b.zmtcdn.com/data/dish_photos/{match.group(1)}"
            results.append(f"{t}: {url}")
        else:
            results.append(f"{t}: Found name, but no image nearby.")
    else:
        results.append(f"{t}: Not found in HTML")

with open('extracted_urls_safe.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(results))
