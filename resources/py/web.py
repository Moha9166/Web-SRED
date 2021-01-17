import requests
from bs4 import BeautifulSoup

url = "https://www.formula1.com/en/drivers.html"
lists = open("C:/Users/moham/Desktop/Grand Folder/Projects/Pagina-SRED/resources/py/positions.moha", "w")

r = requests.get(url)

soup = BeautifulSoup(r.content,'html.parser')

divMain = soup.findAll('div', class_="points")

print(divMain)

for i in divMain:
  print(i.text)


