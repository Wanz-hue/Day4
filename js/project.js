let blogs = [];
function addBlog(event) {
  event.preventDefault();
  let project = document.getElementById("input-project").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;
  let blog = {
    project: project,
    description: description,
    image: image,
  };
  blogs.push(blog);
  console.log(blog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("blogs").innerHTML = "";
  for (let i in blogs) {
    document.getElementById("blogs").innerHTML += `
    <div class="box-blog1">
      <h3>${blogs[i].project}</h3>
      <p>
        ${blogs[i].description}
      </p>
    </div>
        `;
  }
}
