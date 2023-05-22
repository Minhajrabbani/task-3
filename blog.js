let dataBlog = [];

function addBlog(event) {
   event.preventDefault();

   let title = document.getElementById("blog-title").value;
   let content = document.getElementById("blog-content").value;
   let image = document.getElementById("image").files;
   let startDate = document.getElementById("sdate").value;
   let finishDate = document.getElementById("edate").value;

   const jsIcon = '<i class="fa-brands fa-square-js fa-xl fa-fw"></i>';
   const goIcon = '<i class="fa-brands fa-golang fa-xl fa-fw"></i>';
   const reactIcon = '<i class="fa-brands fa-react fa-xl fa-fw"></i>';

   let jsIconDecide = document.getElementById("js-check").checked ? jsIcon : "";
   let goIconDecide = document.getElementById("go-check").checked ? goIcon : "";
   let reactIconDecide = document.getElementById("react-check").checked ? reactIcon : "";

   image = URL.createObjectURL(image[0]);
   console.log(image);

   let blog = {
    title,
    content,
    image,
    startDate,
    finishDate,
    jsIconDecide,
    goIconDecide,
    reactIconDecide
   };

   dataBlog.push(blog);
   console.log(dataBlog);

   renderBlog();
}

function renderBlog(){
    document.getElementById("contents").innerHTML= "";

    for (let index = 0; index < dataBlog.length; index++){
        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
                        <div class="blog-image">
                            <img src="${dataBlog[index].image}" alt=""/>
                        </div>
        
                        <div class="blog-isi">
                            
                            <h4>
                                <a href="blogdetail.html" target="_blank">${dataBlog[index0].title}</a>
                            </h4>
                            <p class="durasi">${dataBlog[index].startDate} - ${dataBlog[index0].finishDate}</p>
                            
                            <p class="isicontent">
                                ${dataBlog[index],content} 
                            </p>
                            <div class="icons">
                                ${dataBlog[index].jsIconDecide}
                                ${dataBlog[index].goIconDecide}
                                ${dataBlog[index].reactIconDecide}
                            </div>
                                
                            <div class="button-group">
                                <button class="edit">Edit</button>
                                <button class="delete">Delete</button>
                            </div>
                        </div>
                    </div>
        `;
    }
}