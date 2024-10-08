"use strict";

const projects = [
  {
    name: "fm-recipe-page",
  },
  {
    name: "fm-social-links-profile",
  },
  {
    name: "fm-workit-landing-page",
  },
  {
    name: "fm-qr-code",
  },
  {
    name: "fm-nft-preview-card",
  },
  {
    name: "fm-blog-preview-card",
  },
  {
    name: "fm-product-preview-card",
  },
  {
    name: "fm-faq-accordion",
  },
  {
    name: "fm-interactive-rating",
  },
  {
    name: "fm-article-preview",
  },
  {
    name: "fm-product-list-with-cart",
  },
  {
    name: "fm-four-card-feature-section",
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
