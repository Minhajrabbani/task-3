let dataBlog = [];

function addBlog(event) {
   event.preventDefault();

   let title = document.getElementById("blog-title").value;
   let content = document.getElementById("blog-content").value;
   let image = document.getElementById("image").files;
   let startDate = new Date(document.getElementById("start-date").value);
   let finishDate = new Date(document.getElementById("end-date").value);

   

   image = URL.createObjectURL(image[0]);
   console.log(image);

   let blog = {
    title,
    content,
    image,
    startDate,
    finishDate,
    
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
                                <a href="blogdetail.html" target="_blank">${dataBlog[index].title}</a>
                            </h4>
                            <p class="durasi">${dataBlog[index].startDate} - ${dataBlog[index].finishDate}</p>
                            
                            <p class="isicontent">
                                ${dataBlog[index].content} 
                            </p>
                            <div class="icons">
                            <i class="fa-brands fa-node-js" id="nodejs-icon"></i>
                            <i class="fa-brands fa-react" id="reactjs-icon"></i>
                            <i class="fa-brands fa-golang fa-xl fa-fw" id="go-icon"></i>
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