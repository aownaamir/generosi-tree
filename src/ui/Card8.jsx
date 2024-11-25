import d1 from "/images/winterdrive.jpg";

function Card8() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={d1}
        alt="Child smiling"
        className="rounded-lg w-full h-40 object-cover"
      />
      <h3 className="text-lg font-bold text-green-600 mt-4">
        Help Sarah Get an Education
      </h3>
      <p className="text-gray-500 mt-2">
        Your donation can provide books, uniforms, and tuition fees.
      </p>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
        Donate Now
      </button>
    </div>
  );
}

export default Card8;
