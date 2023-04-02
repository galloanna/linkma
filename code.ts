figma.showUI(__html__);

figma.ui.resize(500, 800);

figma.ui.onmessage = async (pluginMessage) => {
  await figma.loadFontAsync({ family: "Segoe UI", style: "Regular" });
  await figma.loadFontAsync({ family: "Segoe UI", style: "Bold" });

  const nodes: SceneNode[] = [];

  if (pluginMessage.type === "generate-post") {
    const postComponentSet = figma.root.findOne(
      (node) => node.type == "COMPONENT_SET" && node.name == "post"
    ) as ComponentSetNode;

    let selectedVariant;

    if (pluginMessage.darkModeState === true) {
      switch (pluginMessage.imageVariant) {
        case "image":
          selectedVariant = postComponentSet.findOne(
            (node) =>
              node.type == "COMPONENT" &&
              node.name == "Image=single, Dark mode=true"
          ) as ComponentNode;
          break;
        default:
          selectedVariant = postComponentSet.findOne(
            (node) =>
              node.type == "COMPONENT" &&
              node.name == "Image=none, Dark mode=true"
          ) as ComponentNode;
          break;
      }
    } else {
      switch (pluginMessage.imageVariant) {
        case "image":
          selectedVariant = postComponentSet.findOne(
            (node) =>
              node.type == "COMPONENT" &&
              node.name == "Image=single, Dark mode=false"
          ) as ComponentNode;
          break;
        default:
          selectedVariant = postComponentSet.defaultVariant as ComponentNode;
          break;
      }
    }

    const newPost = selectedVariant.createInstance();

    const templateName = newPost.findOne(
      (node) => node.type == "TEXT" && node.name == "displayName"
    ) as TextNode;
    const templateHeadline = newPost.findOne(
      (node) => node.type == "TEXT" && node.name == "headline"
    ) as TextNode;
    const templateContent = newPost.findOne(
      (node) => node.type == "TEXT" && node.name == "cardContent"
    ) as TextNode;
    const numReactions = newPost.findOne(
      (node) => node.name === "reactionCount" && node.type === "TEXT"
    ) as TextNode;
    const templateAvatarComponent = newPost.findOne(
      (node) => node.name == "avatar / small"
    ) as InstanceNode;
    const templatePostImageComponent = newPost.findOne(
      (node) => node.name == "cardImage"
    ) as InstanceNode;

    const userImage = templateAvatarComponent.findOne(
      (node) => node.name == "image"
    ) as EllipseNode;

    figma.createImageAsync(pluginMessage.avatar).then(async (image: Image) => {
      userImage.fills = [
        {
          type: "IMAGE",
          imageHash: image.hash,
          scaleMode: "FILL",
        },
      ];
    });

    figma
      .createImageAsync(pluginMessage.imagePath)
      .then(async (image: Image) => {
        templatePostImageComponent.fills = [
          {
            type: "IMAGE",
            imageHash: image.hash,
            scaleMode: "FILL",
          },
        ];
      });

    templateName.characters = pluginMessage.name;
    templateHeadline.characters = pluginMessage.headline;
    templateContent.characters = pluginMessage.content;
    numReactions.characters = (Math.floor(Math.random() * 1000) + 1).toString();

    nodes.push(newPost);
    figma.viewport.scrollAndZoomIntoView(nodes);
  } else if (pluginMessage.type === "close") {
    figma.closePlugin();
  }
};
