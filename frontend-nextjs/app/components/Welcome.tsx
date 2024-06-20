import Link from "next/link";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center">Bienvenidos</h1>
      <p className="text-lg text-center mt-4">
        Ir al{" "}
        <Link href="/login">
          <strong>login</strong>
        </Link>
      </p>
    </div>
  );
};
export default Welcome;
