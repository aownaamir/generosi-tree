function DonationCategories() {
  return (
    <div className="flex gap-4 mt-5">
      <button className="bg-chat-green hover:bg-chat-greenH text-white py-2 px-4 rounded">
        All
      </button>
      <button className="bg-chat-green hover:bg-chat-greenH text-white py-2 px-4 rounded">
        Clothes
      </button>
      <button className="bg-chat-green hover:bg-chat-greenH text-white py-2 px-4 rounded">
        Food
      </button>
      <button className="bg-chat-green hover:bg-chat-greenH text-white py-2 px-4 rounded">
        Education
      </button>
      <button className="bg-chat-green hover:bg-chat-greenH text-white py-2 px-4 rounded">
        Health
      </button>
    </div>
  );
}

export default DonationCategories;
