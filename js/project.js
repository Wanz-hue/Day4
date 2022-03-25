let blogs = [];

function addBlog(event) {
  event.preventDefault();
  let project = document.getElementById("input-project").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;
  if (project == "") {
    return alert("isikan form Project");
  } else if (description == "") {
    return alert("isikan deskripsi");
  } else if (image.length == 0) {
    return alert("isikan gambar");
  }
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
  document.getElementById("blogs").innerHTML = `
  <div class="box-blog1">
    <img
      src="./img/42013-rhoma-irama-dan-soneta.jpg"
      class="image"
      alt=""
    /> 
    <a href="./detail.html">
    <h3>Judul</h3>
    </a>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, non.
      Dolores molestias pariatur, nobis consequatur quis qui? Illo, sed
      possimus?
    </p>
    <i class="fa-brands fa-node-js icon-size"></i>
    <i class="fa-brands fa-react icon-size"></i>
    <div class="button-group">
      <div class="button-child">
        <button class="button-edit">Edit</button>
      </div>
      <div class="button-child">
        <button class="button-delete">Delete</button>
      </div>
    </div>
  </div>`;

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
      <i class="fa-brands fa-node-js icon-size"></i>
      <i class="fa-brands fa-react icon-size"></i>
      <div class="button-group">
        <div class="button-child">
          <button class="button-edit">Edit</button>
        </div>
        <div class="button-child">
          <button class="button-delete">Delete</button>
        </div>
      </div>
    </div>
        `;
  }
}
