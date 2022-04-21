// about.js
export default function About({ name }) {
  return (
    <div>
      <h1> About {name}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      name: "OSO",
    }, // will be passed to the page component as props
  };
}
