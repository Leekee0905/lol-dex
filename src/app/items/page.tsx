import ItemCard from "@/components/items/ItemCard";
import { ItemDataDataType, ItemType } from "@/types/itemType";
import { getItems } from "@/utils/serverApi";

const ItemsPage = async () => {
  const itemResponse: ItemType = await getItems();
  const itemsData: ItemDataDataType[] = Object.values(itemResponse.data);
  const version = itemResponse.version;

  return (
    <div className="container my-10">
      <h1 className="text-[#ff5555] font-bold">아이템 목록</h1>
      <div className="container grid grid-cols-5 gap-5 mt-10">
        {itemsData.map((item) => (
          <ItemCard key={item.name} data={item} version={version} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
