export default function Head() {
  return (
    <>
      <title>BLOOD Mini App</title>
      <meta
        name="fc:miniapp"
        content={JSON.stringify({
          name: "BLOOD",
          description: "Mini App untuk Blood Meter",
          image: "/og.png"
        })}
      />
    </>
  );
}
