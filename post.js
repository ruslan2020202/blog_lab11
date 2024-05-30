let con = document.querySelector('.container')

async function getPost(id) {
    let post = await fetch(`https://gorest.co.in/public/v2/posts/${id}`)
    return post.json()
}

async function getComments(id){
    let comPost = await fetch(`https://gorest.co.in/public/v2/posts/${id}/comments`)
    return comPost.json()
}

function searchPost() {
    let postId = new URLSearchParams(window.location.search)
    return postId.get('post')
}

function watchComments(arr){
    let title = document.createElement('h1')
    title.textContent = 'Comments'
    let comments = document.createElement('div')
    comments.className = 'comments'
    con.appendChild(title)
    con.appendChild(comments)
    for (let i of arr){
        let com = document.createElement('div')
        com.className = 'comment'

    }
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
    let comments = await getComments(postId)
    watchPost(post)
    watchComments(comments)
}

document.addEventListener('DOMContentLoaded', async ()=>{
    await main()
})
