import urllib.request
import ssl

context = ssl._create_unverified_context()

urls = [
    ("img1.jpg", "https://b.zmtcdn.com/data/pictures/0/3301080/4e71fb552438717e7dc6e5ef61c1b087.jpg"),
    ("img2.jpg", "https://b.zmtcdn.com/data/pictures/0/3301080/9486ee40ff684e1d72283f1b9a884d05.jpg"),
    ("img3.jpg", "https://b.zmtcdn.com/data/pictures/0/3301080/2444a43366abb328c36e66127f5ff965.jpg"),
    ("img4.jpg", "https://b.zmtcdn.com/data/pictures/0/3301080/858cbce46850c7b7217464c4c040f47e.jpg")
]

for name, url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, context=context) as response:
            with open(name, "wb") as f:
                f.write(response.read())
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
