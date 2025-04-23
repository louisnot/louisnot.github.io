import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException
import time

def get_follower_number(username: str) -> int:
    """
    returns which rank is the follower based on username
    """
    with open("connections/followers_and_following/followers_1.json", "r") as file:
        data = json.load(file)
        print(data)
        for i, follower in enumerate(data):
            if follower["string_list_data"][0]["value"] == username:
                return len(data) - i # Instagram Data is ascended meaning first in the list is last follower
    return -1


def update_follower_number(username: str) -> int:
    """
    get the follower number by parsing profile page
    """
    url = f"https://instagram.com/{username}"
    options = Options()
    options.add_argument("--no-sandbox")
    mobile_emulation = {
        "userAgent": "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/90.0.1025.166 Mobile Safari/535.19"
    }
    options.add_experimental_option("mobileEmulation", mobile_emulation)
    # chrome_options.add_argument("--headless=new")
    service = Service("C:\webdrivers\chromedriver.exe")
    driver = webdriver.Chrome(service=service, options=options)
    driver.get(url)
    time.sleep(3)
    try:
        element = driver.find_element(
            By.XPATH,
            "/html/body/div[2]/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[3]/div[1]/div",
        )
        element.click()
    except NoSuchElementException:
        print("[INFO] - Instagram did not require to accept cookies this time.")
    try:
        element = driver.find_element(
            By.XPATH,
            "/html/body/div[5]/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[1]/div",
        )
        element.click()
    except NoSuchElementException:
        print("[INFO] - Instagram did not display login popup")
    follower_element = driver.find_element(
        By.XPATH,
        "/html/body/div[1]/div/div/div[2]/div/div/div[1]/div[2]/div/div[1]/section/main/div/header/section[3]/ul/li[2]/div/button/span",
    ).click()
    # follower_element = driver.find_element(By.XPATH, "//a[contains(@href, '/followers')]")
    print(follower_element)
    driver.quit()
    raise ValueError("Could not find follower count")


if __name__ == "__main__":
    res = get_follower_number("")
    print(res)
    update_follower_number("")
