import requests
from bs4 import BeautifulSoup



url = "https://www.formula1.com/en/drivers.html"

r = requests.get(url)

soup = BeautifulSoup(r.content,'html.parser')

divMain = soup.findAll('div', class_="points")

print(divMain)
file.write("hola")
file.close()
# for i in divMain:
#   print(i.text)

# file.write(i.text)
# file.close()
