const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const onOpenFile = vscode.window.onDidChangeActiveTextEditor((editor) => {
    vscode.window.showInformationMessage(JSON.stringify(editor));

    if (editor) {
      vscode.commands.executeCommand("workbench.action.closeSidebar");
    }
  });

  context.subscriptions.push(onOpenFile);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
