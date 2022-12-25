let blogs = [];

function addBlog(event) {
  event.preventDefault();
  let project = document.getElementById("input-project").value;
  let startDate = document.getElementById("input-startdate").value;
  let endDate = document.getElementById("input-enddate").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;
  let nodejs = document.getElementById("nodejs").checked;
  let reactjs = document.getElementById("reactjs").checked;
  let vuejs = document.getElementById("vuejs").checked;
  let python = document.getElementById("python").checked;


  validation(project, description, image);
  image = URL.createObjectURL(image[0]);
  if (nodejs == true) {
    nodejs = document.getElementById("nodejs").value;
  } else {
    nodejs = "";
  }
  if (reactjs == true) {
    reactjs = document.getElementById("reactjs").value;
  } else {
    reactjs = "";
  }
  if (vuejs == true) {
    vuejs = document.getElementById("vuejs").value;
  } else {
    vuejs = "";
  }
  if (python == true) {
    python = document.getElementById("python").value;
  } else {
    python = "";
  }
  let blog = {
    project: project,
    description: description,
    startDate : startDate,
    endDate : endDate,
    image: image,
    nodejs: nodejs,
    reactjs: reactjs,
    vuejs: vuejs,
    python: python,
    
    
  };
  blogs.push(blog);
  renderBlog();
}

function validation(project, description, image) {
  if (project == "") {
    return alert("isikan form Project");
  } else if (description == "") {
    return alert("isikan deskripsi");
  } else if (image.length == 0) {
    return alert("isikan gambar");
  }
}

function renderBlog() {
  document.getElementById("blogs").innerHTML = `
  <div class="box-blog1">
  <img
    src="./img/images.jfif"
    class="image"
    alt=""
  />
  <a href="./detail.html">
    <h3>Test</h3>
  </a>
  <p>durasi: 2 bulan lalu</p>
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

  // checkbox deklar
  for (let i in blogs) {
    document.getElementById("blogs").innerHTML = `
    <div class="box-blog1">
      <><img
        src="${blogs[i].image}"
        class="image"
        alt="" 
        />
        <a href="./detail.html">
        <h3>${blogs[i].project}</h3>
        </a>
        <p>durasi: ${getDate(blogs[i].startDate, blogs[i].endDate)}</p>
        <p>
          ${blogs[i].description}
        </p>
        <i class="${blogs[i].nodejs}"></i>
        <i class="${blogs[i].reactjs}"></i>
        <i class="${blogs[i].vuejs}"></i>
        <i class="${blogs[i].python}"></i>
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
  function getDate(startDate , endDate) {
    let timeStart = new Date(startDate)
    let timeEnd = new Date(endDate)

    let distance = timeEnd - timeStart

    let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
    if (monthDistance != 0) {
        return monthDistance + ' Month'
    } else {
        let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
        if (weekDistance != 0) {
            return weekDistance + ' Week'
        } else {
            let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
            if (daysDistance != 0) {
                return daysDistance + ' Days'
            } else {
                return ' 1 Days'
            }
          
        }
      
    }
  
}
}


