
module.exports = function() {
  this.Given(/^the application is running$/, function(callback) {
    this.signInWindow = new this.BrowserWindow({fullscreen: true});
    this.signInWindow.loadURL('file:///C:/Data/Personal/gitHack/index.html');
    this.signInWindow.webContents.openDevTools({mode: 'bottom'});
    callback();
  });

  this.When(/^I enter my credentials into the sign in form$/, function() {
    return this.typeText(this.signInWindow, 'username', 'Michael')
        .then(() => this.typeText(this.signInWindow, 'password', 'password'))
        .then(() => this.clickButton(this.signInWindow, 'signin'));
  });

  this.Then(/^I will be granted access to the application$/, function(callback) {
    callback(null, 'pending');
  });
};