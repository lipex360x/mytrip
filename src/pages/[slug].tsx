export default function Page({ title, text }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
    </>
  )
}

export async function getStaticPaths() {
  const paths = [{
    params: { slug: 'about' }
  }]

  return { paths, fallback: true }
}

export const getStaticProps = async() => {
  return {
    props: {
      title: 'About Page',
      text: 'About page Text'
    }
  }
}
