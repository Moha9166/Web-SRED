from bs4.element import SoupStrainer
import requests

page=requests.get("https://www.formula1.com/en/drivers.html")

from bs4 import BeautifulSoup

soup=BeautifulSoup(page.content, 'html.parser')

# print(soup.prettify())

result = soup.find("span", {"class":"tw-animated-number tw-animated-number--monospaced"})
print (result.text)