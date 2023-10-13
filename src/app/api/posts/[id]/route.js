import { find } from 'lodash'

export async function GET(request) {
  console.log('request', request)
  const id = request.url.split('/')[-1]

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  const posts = await response.json()

  const post = find(posts, { id })

  return Response.json({ post })
}
