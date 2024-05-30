let con = document.querySelector('.con-posts')

async function getPostsPage(page) {
    let posts = await fetch(`https://gorest.co.in/public/v2/posts?page=${page}`)
    return posts.json()
}


function searchPage() {
    let page = new URLSearchParams(window.location.search)
    let defaultPage = 1
    return page.get('page') ?? defaultPage
}


function createBtn(id) {
    let button = document.createElement('button')
    button.className = 'btn btn-primary'
    button.textContent = 'Readme ->'
    button.addEventListener(('click'), () => {
        window.location.href = `http://localhost:63342/lab11/post.html?post=${id}`
    })
    return button
}

function addPosts(array) {
    for (let i of array) {
        let post = document.createElement('div')
        post.className = 'post'
        post.id = i.id
        post.textContent = i.title
        let btn = createBtn(post.id)
        post.appendChild(btn)
        con.appendChild(post)
    }

}

function pagination() {
    let btns = document.querySelector('.btn-group')
    btns.addEventListener('click', (e) => {
        if (e.target && e.target.matches('button')) {
            let currentPage = parseInt(searchPage());
            if (e.target.textContent === 'Прошлая' && currentPage > 1) {
                window.location.href = `http://localhost:63342/lab11/index.html?page=${currentPage - 1}`
            } else if (e.target.textContent === 'Следующая') {
                window.location.href = `http://localhost:63342/lab11/index.html?page=${currentPage + 1}`
            }
        }
    })

}

async function main() {
    let posts = await getPostsPage(searchPage())
    addPosts(posts)
    pagination()
}


document.addEventListener('DOMContentLoaded', async () => {
    await main()
})