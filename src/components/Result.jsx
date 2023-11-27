export default function Result({result}) {
    let title = result.data[0].title
    let src = result.links[0].href
    let desc = result.data[0].description
  return (
    <li>
        <h4>{title}</h4>
        <img src={src} alt={desc} />
    </li>
  )
}