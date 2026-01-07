function LogoSlide({ logos }) {
  return (
    <div className="logo-slide flex shrink-0">
      {logos.map((logo) => (
        <img
          key={logo.id}
          src={logo.src}
          alt={logo.name}
          className="h-20 w-auto"
        />
      ))}
    </div>
  );
}

export default LogoSlide;
