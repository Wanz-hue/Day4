let blogs = [];
let choice = [];

function choices(value) {
  console.log(value);
}

function addBlog(event) {
  event.preventDefault();
  let project = document.getElementById("input-project").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;
  image = URL.createObjectURL(image[0]);
  let blog = {
    project: project,
    description: description,
    image: image,
  };
  blogs.push(blog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("blogs").innerHTML = "";
  for (let i in blogs) {
    document.getElementById("blogs").innerHTML += `
    <div class="box-blog1">
      <img
        src="${blogs[i].image}"
        class="image"
        alt=""
      /> 
      <a href="./detail.html">
      <h3>${blogs[i].project}</h3>
      </a>
      <p>
        ${blogs[i].description}
      </p>
    </div>
        `;
  }
}
