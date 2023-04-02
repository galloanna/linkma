
# ⛓️ Linkma

This project was created as a supplemental application material for a Design Engineer role at LinkedIn.

Linkma is a Figma plugin that generates editable, prototypable Figma components using a combination of design tokens, component instances, markup, and JavaScript. Linkma is meant to expedite internal workflows for UX, Product Design, Design Systems, or similar teams.

The plugin currently generates LinkedIn Post components.

<img src="https://user-images.githubusercontent.com/61474460/229335152-e2ee9e58-4b55-488c-8f5d-282feae1646d.png" width="60%" alt="" />

## ✔️ Features

- Choose between light and dark mode posts
- Choose between posts with and without body images
- Random interaction count generator
- Ability to enter custom user information and images, use a random generator, or combine the two
- Accessible color palette, focus indicators, and control associations


## 👀 Demo

*Link to downloadable Figma Community instance coming soon.*

<img src="https://user-images.githubusercontent.com/61474460/229338580-ebb1a676-61a0-4314-b571-4f68cfc08620.gif" width="60%" alt="" />
<figcaption>Generating light mode post component with image from default content.</figcaption>
</figure>
<br>
<hr>
<br>
<figure>
<img src="https://user-images.githubusercontent.com/61474460/229338603-8f86b37e-5e25-4ffe-8531-bcb50a0b27bc.gif" width="60%" alt="" />
<figcaption>Generating dark mode post component with image from randomized content.</figcaption>
</figure>
<br>
<hr>
<br>
<figure>
<img src="https://user-images.githubusercontent.com/61474460/229338638-c70b004f-93e5-4f69-b073-b33883cb97a8.gif" width="60%" alt="" />
<figcaption>Generating light mode post component without image from custom content.</figcaption>
</figure>
<br>
<hr>
<br>
<figure>
<img src="https://user-images.githubusercontent.com/61474460/229339010-bcfc2b1f-c9a7-4fb0-9b96-c35d5cf9f05f.gif" width="60%" alt="" />
<figcaption>Generating light mode post component without image from randomized content.</figcaption>
</figure>


## 🏃‍♀️ Run Locally

Download the project file

```bash
  git clone https://github.com/galloanna/linkma.git
```

Make a copy of the [project template file](https://www.figma.com/file/xlaLLMIkzKOlRi7Gt6PMzE/Linkma---Anna-Gallo---Design-Engineer?node-id=879-21002) in your Figma **Desktop** App. If you don't have the Figma Desktop App, you can [download it here](https://www.figma.com/downloads/).

Import the plugin to your local development environment by doing the following:
- Open the Figma **Desktop** App
- Go to Figma > Plugins > Development > Manage plugins in development
- Click the `+` icon and then select 'Import plugin from manifest'
- Select the `manifest.json` file from your local repo
- Run the plugin by choosing Figma > Plugins > Development > Linkma


## 🙏 Acknowledgements

This project was developed using the following resources:

 - [Figma Build Your First Plugin Course](https://help.figma.com/hc/en-us/sections/6448765398551-Build-Your-First-Plugin-Course-5-parts-)
 - [Figma Plugin API Documentation](https://www.figma.com/plugin-docs/)
 - [Figma Petma Community File](https://www.figma.com/community/file/915647337333327091)
 - [Figma Plugin DS](https://github.com/thomas-lowry/figma-plugin-ds) by Thomas Lowry

