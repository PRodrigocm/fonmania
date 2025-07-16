export default function Typography() {
  return (
    <section className="bg-[#7100E4] text-white py-12 px-6 flex flex-col md:flex-row justify-around items-center gap-12">
      <div className="text-center max-w-xs">
        <h3 className="text-4xl font-raleway font-bold mb-4">Raleway</h3>
        <p className="font-raleway text-sm">
          ABCDEFGHIJKLMNÑOPQRSTUVWXYZ<br />
          abcdefghijklmnñopqrstuvwxyz<br />
          1234567890
        </p>
      </div>
      <div className="text-center max-w-xs">
        <h3 className="text-4xl font-nunito font-bold mb-4">Nunito</h3>
        <p className="font-nunito text-sm">
          ABCDEFGHIJKLMNÑOPQRSTUVWXYZ<br />
          abcdefghijklmnñopqrstuvwxyz<br />
          1234567890
        </p>
      </div>
    </section>
  );
}
