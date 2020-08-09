let debug = false;
debugLog = debug ? console.log.bind(null, "DEBUG: ") : ()=>{};

browser.commands.onCommand.addListener(async function(command) {
  debugLog(command);
  if (command == "_back") {
    const currentTab = (await browser.tabs.query({currentWindow: true, active: true}))[0];
    console.assert(currentTab);

    const leftTab = (await browser.tabs.query({index:currentTab.index-1}))[0];
    console.assert(leftTab);

    browser.tabs.update(leftTab.id, {active: true});
  }
  if (command == "_foward") {
    const currentTab = (await browser.tabs.query({currentWindow: true, active: true}))[0];
    console.assert(currentTab);

    const rightTab = (await browser.tabs.query({index:currentTab.index+1}))[0];
    console.assert(rightTab);

    browser.tabs.update(rightTab.id, {active: true});
  }
});
