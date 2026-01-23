import Background from "./assets/background/background"

function App() {
  return(
    <>
      <div style={{ width: '99%', height: '99%', position: 'absolute'}}>
      <Background
          particleColors={["#eae7e7"]}
          particleCount={200}
          particleSpread={20}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
      />
      </div>
    </>
  );
}

export default App;
