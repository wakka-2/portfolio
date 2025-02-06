import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def download_image(url, filename):
    response = requests.get(url)
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {filename}")
    else:
        print(f"Failed to download {filename}")

def get_app_image(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            # Try to find the app icon
            img = soup.find('img', {'class': 'T75of'})
            if img and img.get('src'):
                return img['src']
    except Exception as e:
        print(f"Error fetching {url}: {e}")
    return None

# Create assets directory if it doesn't exist
os.makedirs('assets', exist_ok=True)

# List of apps and their Play Store URLs
apps = [
    ('frjar-customer', 'https://play.google.com/store/apps/details?id=com.frjar.customer'),
    ('frjar-provider', 'https://play.google.com/store/apps/details?id=com.frjar.provider'),
    ('ucan', 'https://play.google.com/store/apps/details?id=com.app.ucan'),
    ('dawul', 'https://play.google.com/store/apps/details?id=com.dawul'),
    ('munjez', 'https://play.google.com/store/apps/details?id=io.munjez'),
]

# Download images for each app
for app_name, url in apps:
    image_url = get_app_image(url)
    if image_url:
        filename = os.path.join('assets', f"{app_name}.png")
        download_image(image_url, filename)
    else:
        print(f"Could not find image for {app_name}")
