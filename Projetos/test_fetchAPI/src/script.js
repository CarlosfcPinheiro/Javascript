const url = "https://jsonplaceholder.typicode.com/posts";

const loadding_el = document.querySelector('#loading');
const posts_container = document.querySelector('#posts-container');

const postPage = document.querySelector('#post');
const postContainer = document.querySelector('#post-container');
const commentsContainer = document.querySelector('#comments-container');

// Get id from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const postid = urlSearchParams.get("id");

// Get all posts
async function getAllPosts(){

    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);

    loadding_el.classList.add('hide');

    data.map((post) => {

        const div_post = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "Read";
        link.setAttribute("href", `/post.html?id=${post.id}`);

        div_post.appendChild(title);
        div_post.appendChild(body);
        div_post.appendChild(link);

        posts_container.appendChild(div_post);
    });
}

// Get individual post
async function getPost(id){

    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json()
    const dataComments = await responseComments.json()

    loadding_el.classList.add("hide");
    postPage.classList.remove("hide");

    const title = document.createElement("h1");
    const body = document.createElement("p");

    title.innerText = dataPost.title;
    body.innerText = dataPost.body;

    postContainer.appendChild(title);
    postContainer.appendChild(body);
}

if (!postid){
    getAllPosts();
} else {
    getPost(id);
}