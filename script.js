"use strict";

const projects = [
  {
    name: "fm-recipe-page",
  },
  {
    name: "fm-social-links-profile-main",
  },
  {
    name: "fm-workit-landing-page",
  },
  {
    name: "fm-qr-code-component",
  },
  {
    name: "fm-nft-preview-card-component-main",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
		</div>
	`;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .splice(1)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// projects.forEach(({ name }, i) => {
//   const splitArr = console.log(splitArr);
// });

// const arr1 = "14-Hudd÷le-landing-page";

// for (let i = 0; i < projects.length; i++) {}
