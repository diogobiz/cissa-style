export default function Home() {
  return (
    <main>
      <div
        className="mx-auto"
        style={{
          width: "100%",
          height: 0,
          paddingBottom: "133%",
          position: "relative",
        }}
      >
        <iframe
          src="https://giphy.com/embed/kaMwwM91UCxstRfvA3"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <h1 className="text-4xl text-center font-bold mt-6">
        Feliz aniversário!!
      </h1>

      <h1 className="text-lg text-center font-bold mt-6">
        Seja feliz, hoje e para sempre,
        <br /> comigo ao seu lado! <br />
        Espero estar contigo em todos <br />
        os seus aniversários.
      </h1>

      <h1 className="text-base text-center font-bold text-rose-400 mt-6">
        Ps: Em breve aqui vai ser seu site.
      </h1>
    </main>
  );
}
