function World() {
  const {app, BrowserWindow} = require('electron');

  this.app = app;
  this.BrowserWindow = BrowserWindow;

  this.typeText = function(window, id, text) {
    return new Promise(function(resolve, reject) {
      var code = `var input = document.getElementById('${id}');
      if (!input) {
        'FAIL: An input element with identifier ${id} was not found';
      } else {
        input.value = '${text}';
      }`
      window.webContents.executeJavaScript(code, true, function(result) {
        console.log(`result = ${result}`);
        if (result instanceof Error) {
          reject(result);
        }

        resolve(result);
      });
    });
  };

  this.clickButton = function(window, id) {
    return new Promise(function(resolve, reject) {
      var code = `var button = document.getElementById('${id}');
      if (!button) {
        'FAIL: A button with identifier ${id} was not found';
      } else {
        button.click();
      }`;
      window.webContents.executeJavaScript(code, true, function(result) {
        console.log(result);
        if (result.startsWith('FAIL:')) {
          reject(new Error(result.substring(5).trim()));
        }

        resolve(result);
      });
    });
  };
}

module.exports = function() {
  this.World = World;
};