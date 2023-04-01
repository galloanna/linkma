figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.ui.onmessage = (pluginMessage) => {
  if (pluginMessage.type === 'generate-post') {
    console.log(pluginMessage);
    return;
  }
  figma.closePlugin();
};
