import json
import re

try:
    with open('zomato_order.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Zomato also uses <script id="__NEXT_DATA__" type="application/json">
    match = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html, re.DOTALL)
    if match:
        data = json.loads(match.group(1))
    else:
        # Fallback to pure regex finding "name", "desc", "price" looking blocks
        print("Could not find __NEXT_DATA__")
        exit(1)
            
    items_list = []
    seen_names = set()
    
    def extract_items(obj):
        if isinstance(obj, dict):
            # Typical NextJS data structures or Zomato specific API
            name = obj.get('name')
            price = obj.get('price') or obj.get('display_price')
            if name and isinstance(name, str) and price:
                if name not in seen_names:
                    # Clean up price if it's a dict
                    if isinstance(price, dict):
                        price = price.get('display_price', price.get('default_price', ''))
                    
                    desc = obj.get('desc', obj.get('description', ''))
                    img_url = obj.get('item_image_url', '')
                    
                    items_list.append({
                        "name": name,
                        "price": str(price),
                        "description": desc,
                        "image": img_url
                    })
                    seen_names.add(name)
            for k, v in obj.items():
                extract_items(v)
        elif isinstance(obj, list):
            for v in obj:
                extract_items(v)
                
    extract_items(data)
    
    with open('extracted_menu.json', 'w', encoding='utf-8') as f:
        json.dump(items_list, f, indent=2)
        
    print(f"Extracted {len(items_list)} items.")
except Exception as e:
    print("Error:", e)
