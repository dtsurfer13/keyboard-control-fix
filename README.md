# keyboard-control-fix
Fix Confluence stealing my Mac control-key cursor movements

INSTALLATION: 

  .. Create a local chrome extension directory, and clone the repo into it. (eg. mine is: ~/Chrome/Extensions/)
  
  .. Update the manifest.json "matches" list as needed.
  
  .. In chrome open URL: chrome://extensions/
  
  .. Use the [Load unpacked extension...] button and navigate to the keyboard-control-fix directory, and select it.

TESTING CHANGES:

  .. use the chrome Extensions [Reload] link when testing changes, also remember to reload your testpage

TODO:

.. This version disables all TinyMCE shortcuts, ideally only <ctl>-key shortcuts would be disabled and <cmd>-key shortcuts would be preserved.

BACKGROUND:
This expands the script by Marc Tamsky, for use as a Chrome extension.

See: https://jira.atlassian.com/browse/CONF-21908 - to vote for Atlassian to fix it! :)
