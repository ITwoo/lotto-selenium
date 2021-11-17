const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const url = 'https://dhlottery.co.kr/gameResult.do?method=allWin';
// https://dhlottery.co.kr/gameResult.do?method=allWin

(async function myFunction() {
  let driver = await new Builder().forBrowser('chrome').build();  //가상 브라우저 빌드
  try {
    await driver.get(url);    //get(url) 인거 보면 뭔지 알것같이 생겼다
    // await driver.wait(() => { return false; }, 10000);
    let selectbox = await driver.findElement(By.css('#drwNoStart > option:last-child')).click();
    console.log('--------------------')
    console.log(selectbox);
    await driver.findElement(By.id('exelBtn')).click();
    console.log('--------------------')
    await driver.wait(() => { return false; }, 4000);

  }catch(err) {
    console.log('error');
    console.log(err);
  }
  finally {
    await driver.quit(); //가상 브라우저를 종료시킨다
  }
})();