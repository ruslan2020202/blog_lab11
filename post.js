let con = document.querySelector('.container')

async function getPost(id) {
    let post = await fetch(`https://gorest.co.in/public/v2/posts/${id}`)
    return post.json()
}

async function getComments(id){
    let comPost = await fetch(`https://gorest.co.in/public/v2/posts/${id}/comments`)
}

function searchPost() {
    let postId = new URLSearchParams(window.location.search)
    return postId.get('post')
}

function watchComments(){

}

function watchPost(obj){
    let title = document.createElement('h1')
    title.textContent = obj.title
    let content = document.createElement('div')
    content.textContent = obj.body
    con.appendChild(title)
    con.appendChild(content)
}

async function main(){
    let postId = searchPost()
    let post = await getPost(postId)
    watchPost(post)
}

document.addEventListener('DOMContentLoaded', async ()=>{
    await main()
})
